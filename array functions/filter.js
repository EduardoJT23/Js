/*now we have the filter function, this one we can use to get something specific from an array
like object with a set amount of letters, or repeated objects, etc.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//here we have an array with random words on it

const result = words.filter((word) => word.length > 6);
//we make a filter function so only words with a lenght of 6 chars or more are stored in our variable result

console.log(result);

//another use of filter would be to know how many times values in an array appear
const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];

let uniqueElements = [...new Set(myArray)];
console.log(uniqueElements)
//here we are using the "set"function wich will make the new array here, have only different elements

 const elementCounts = uniqueElements.map(value => [value, myArray.filter(str => str === value).length]);

/* over here we create a new variable, "elementcounts" wich will store the result of our .filter and .map request
we use .map function to return a new array containing the values returned from the callback function. with the filter
function we filter those who are the same as the current value on the .map function*/
console.log(elementCounts);

console.log(result);