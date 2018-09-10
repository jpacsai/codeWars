// Catalog

/*
You are given a small extract of a catalog:

s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

...
(prx stands for price, qty for quantity) and an article i.e "saw".

The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
If the article is not in the catalog return "Nothing".

Notes
There is a blank line between two lines of the catalog.
The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).
The line separator of results may depend on the language \nor \r\n. You can see examples in the "Sample tests".

*/

function catalog(s, article) {
    const cat = s.replace(/<prod>|<\/prod>|<name>|<\/name>|<prx>|<\/prx>|<qty>|<\/qty>|\n/g, ' ').trim().split('  ');
    let i = cat.length - 1;
    let str = 'Nothing';
    while (i >= 0) {
      if (cat[i].includes(article) === true) {
        const message = `${cat[i]} > prx: ${'$' + cat[i+1]} qty: ${cat[i+2]}`
        str = str !== 'Nothing' ? message + '\r\n' + str : message;
      }
      i--;
    }
    return str;
}