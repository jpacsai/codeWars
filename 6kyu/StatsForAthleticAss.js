// Statistics for an Athletic Association

/* 
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form:

"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:

if a result in seconds is ab.xy... it will be given truncated as ab.

if the given string is "" you will return ""
*/

const strToSec = (str) => {
  const values = str.split('|').map(s => Number(s));
  return values[0] * 3600 + values[1] * 60 + values[2];
}

const getRange = (values) => Math.max(...values) - Math.min(...values);

const getAvg = (values) => {
  const total = values.reduce((acc, num) => acc + num);
  return Math.floor(total / values.length);
}

const getMedian = (values) => {
  const sortedValues = values.sort((a, b) => a - b);
  const halfIndex = Math.floor(values.length / 2);
  if (values.length % 2) return sortedValues[halfIndex];
  return Math.floor((sortedValues[halfIndex - 1] + sortedValues[halfIndex]) / 2);
}

const secToStr = (seconds) => {
  const hr = Math.floor(seconds / 3600);
  const remainder = seconds % 3600;
  const min = Math.floor(remainder / 60);
  const sec = remainder % 60;
  return [hr, min, sec].map(value => String(value).padStart(2, 0)).join('|');
}

const stat = (strg) => {
  if (!strg) return '';
  const valuesInSec = strg.split(', ').map(str => strToSec(str));
  const range = getRange(valuesInSec);
  const avg = getAvg(valuesInSec);
  const median = getMedian(valuesInSec);
  return `Range: ${secToStr(range)} Average: ${secToStr(avg)} Median: ${secToStr(median)}`;
}