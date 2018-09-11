// Extract the domain name from a URL

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

function domainName(url){
    const start = url.includes('www.') == true ? 'www.' : url.includes('//') === true ? '//' : '';
    const startIndex = url.indexOf(start) + start.length;
    const withoutStart = url.slice(startIndex);
    return withoutStart.slice(0, withoutStart.indexOf('.'))
}