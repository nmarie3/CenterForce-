/*----　①return true or false if one number is 100 or the sum of two numbers is 100*/

const is100 = (a,b) => a === 100 || b === 100 || (a +b) === 100;

console.log(is100(50, 2));
console.log(is100(50, 50))
console.log(is100(0, 100))
console.log(is100(100,70))


/*----　②get file extension*/

const getfileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log('index.html')
//str can be any filename we want
//slice function gives a portion of the actual string
//need to pass through a start number and end number. the start number should be the last occurance of the dot in the string
//so you put a dot in the parentheses so it can grab the last occurance in that string.
//will console log the file type html

/*----　③replace every character in a given string with the character following it in the alphabet.*/

//String.fromCharCode > takes a numerical code which represents the string and converts
    //it back into an actual character into a string we need
//charCodeAt > returns the numerical value that we need, basically A =1 etc.
    //and so it gives the character back we've converted into a number and then back into a string

const moveChara = (str) => 
    str
    .split('') //split returns each character in the string as an array
    .map(char => String.fromCharCode(char.charCodeAt (0) + 1)) 
    //map changes every item in an array depending on what you pass in as the function
    .join(''); //then this will join the chars

    console.log(moveChara('abcd')); //console logs 'bcde'

/*----　④take current date and print it out in an expected format*/

const formatDate = (date = new Date()) => { 
    //new Date here lets function default to current date if no argument is passed and makes new Date object if there is an argument
    const days = date.getDate()
    const months =date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`
}

console.log(formatDate());

/*----　⑤create a new string adding "New!" in front of given string. if given strings already starts with "New!" then return original string*/

const addNew = (str) => `New ${str}`;
console.log(add('New! Offers'));
//this solves adding New to the string, but it needs an if statement.

const addNew2 = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(add('New! Offers')); 
//this will notice that the index 0 is New! and will only use whatever comes after that


/*----　⑥create a new string that takes the first 3 characters and the last 3 characters of a
given string and adds them together. string length must be 3 or more or else orignial string is returned*/

const createNewStr = (str) =>
    str.length < 3 ? str : str.slice(0, 3) //the slice is starting at index 0 and ends at index 3
    + str.slice(-3) //the -3 will take the last 3 characters

    console.log(createNewStr('abc')); //returns same cause only 3
    console.log(createNewStr('abcdef')); //returns same because 6 (3+3) total
    console.log(createNewStr('abc123abc123')); //returns abc123 because takes first 3 and last 3
    console.log(createNewStr('ab')); //returns same cause not enough


/*----　⑦write a program to extract first half of a string of even length*/

const firstPart = (str) => str.slice(0, str.length / 2); //use slice to get a portion of string
console.log(firstPart('coffee')); //returns cof
console.log(firstPart('pizza')) //returns 'piz'


/*----　⑧concatenate two strings except their first character*/

const concat = (str1, str2) =>
    str1.slice(1) + str2.slice(1); //slicing the string with an index of 1 means it will start on the second letter of the str
    console.log(concat('dog', 'cat')); //returns 'ogat'

/*----　⑨given two values, find out which is closest to 100*/

const near100 = (a, b) => (100 -a) < (100 - b) ? a : b;
//can probably be done with an if statement but this is just quick and simple
console.log(near100(50, 80));
console.log(near100(90, 10));

/*----　⑩check a given string contains 2 to 4 occurrences of a specific character*/

const countChara = (str, char) =>
    str.split('').filter(ch => ch === char).length; //best to split chars into array first.
//filter (an array-like function)  will filter out any items that don't mean certain conditions
//the ch in the filter can be anything, it's just a callback to the filter function which has an arrow function 
    //with one parameter, and then ask is ch equal to the char that's passed in the parent function above.
    //if it matches it will keep it in the array, and if not it will drop and remove it.
//adding .length will tell us how many characters as specified by char are in the base str, in relation to below function.

const has2to4 = (str, char) =>
    countCharas(str, char) >= 2 && countChara(str, char) <= 4;
//this function will give us a boolean after it computes the split and filter

console.log(has2to4('eeeh', 'e')); 
console.log(has2to4('eehhhhh!', 'e'));
console.log(has2to4('hhhhh', 'e'));
console.log(has2to4('eeeeee', 'e'));


/*----　⑪find the number of even digits in an array of integers*/

const countEven = (arr) => arr.filter(num => num % 2 === 0).length;
//filter is looking for rules to apply to the array.
    //in this case the arr is taking numbers (num) and is asking if any of those nums have a remainder of 0

console.log(countEven([1,2,3,4,5,6])); //returns 3
console.log(countEven([2,2,5,7,6,8,4])); //returns 5

/*---　⑫find the number of even values up to a give number*/
const countEven2 = (arr) => arr.filter(num => num % 2 === 0).length;
//can use same code as above

const makeNumArray = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
}