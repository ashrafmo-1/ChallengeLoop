/*
  ===============================         =========================
  == built in function using ====         ==== data type using ====
  ===============================         =========================
  = 1* length => get count of str      = 1* string => text            =
  = 2*                                 = 2* numbers                   =
  = 3*                                 = 3* boolian                   =
  = 4*                                 = 4* arrays => box of datatype =
  = 5*                                 =                              =
  = 6*                                 =                              =
  = 7*                                 =                              =
  = 8*                                 =                              =
  = 9*                                 =                              =
  = 10*                                =                              =
*/

/*==============================================================*/
// 1* Create a function that takes a string and returns its length.
const len_str = (str) => {
  return str.length;
}
console.log(len_str('ashraf'));
/*=============================================================================*/
// 2* Write a function that takes two numbers as arguments and returns their sum.
const sum = (n1, n2) => {
  return n1 + n2;
}
console.log(sum(19, 1));
/*=====================================================================================================*/
// 3* Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
const sumNumbersArr = (arr) => {
  let total = 0;
  for(i = 0; i < arr.length;i++){
    total += arr[i];
  }
  return total;
}
console.log(sumNumbersArr([1,2,3,4,5]));
/*=============================================================================*/
// 4* Create a function that takes a string and returns the reverse of the string.
const reversString = (str) => {
  return str.split("").reverse().join("");
}
console.log(reversString('hello'));
/*==========================================================*/
// 5* Write a function that checks if a number is even or odd.
const OddOrEven = (n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(OddOrEven(9));
/*===============================================================================================*/
// 6* Create a function that takes an array of numbers and returns the maximum number in the array.
const find_max = (arr) => {
  return Math.max(...arr);
}
console.log(find_max([1,2,4]));
/*======================================================================*/
// 7* Write a function that takes two numbers and returns the larger one.
const larger = (nOne, nTwo) => {
  if (nOne > nTwo) {
    return nOne;
  } else {
    return nTwo
  }
}
console.log(larger(5,4));
/*===============================================================================================*/
// 8* Create a function that takes an array of strings and returns the longest string in the array.
/// example one
let arr = ["ali", "nadaaaa", "rania", 'ashrafMoha'];
const  longestString_exampleOne = (arr) => {
  let longest = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestString_exampleOne(arr));
// const longestString_exampleTwo = (arr) => {
//   let longest = "";
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > longest.length){
//       longest = arr[i];
//     }
//   }
// }
/*=======================================================================================*/
// 9* Write a function that takes a number and returns true if it's prime, false otherwise.
function InitialPreparations(num) {
  if (num <= 1) {
    return false;
  } else {
    for(i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0){
        return false;
      }
    }
  }
  return true;
}
console.log(InitialPreparations(2));
console.log(InitialPreparations(3));
console.log(InitialPreparations(5));
console.log(InitialPreparations(7));
console.log(InitialPreparations(11));
console.log(InitialPreparations(13));
/*========================================================================================================*/
// 10* Create a function that takes an array of numbers and returns a new array with only the unique numbers.
const unique = (arr) => {
  return [...new Set(arr)];
}
console.log(unique([1,32,4,4,54,55,1,55]));
console.log(typeof unique([1,32,4,4,54,55,1,55]));
/*===============================================================================*/
// 11* Writstateunction that takes a string and returns the number of vowels in it.
const vowels = 'aeiouAEIOU';
const count_vowels = (string) => {
  let count = 0;
  // for(i = 0; i < string.length; i++) {
  for(let char of string) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count;
}
console.log(count_vowels("hello world"));
/*===============================================================================================*/
// 12* Create a function that takes an array of numbers and returns the average of all the numbers.
const average = (array) => {
  let sum = array.reduce((acc, current) => acc + current ,0);
  return sum / array.length;
}
console.log(average([1,2,2,2,3,5,6,7,7,7,7,7]));
/*==========================================================================================*/
// 13* Write a function that takes a number and returns its factorial. // search more example
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let index = n - 1; index >= 1; index--) {
    n *= index;
  }
  return n;
}
console.log(factorial(10));
/*=========================================================================================================*/
// 14* Create a function that takes an array of strings and returns a new array with the strings capitalized.
const array_strings = (arr) => {
  return arr.join(' ').toUpperCase().split(' ');
}
console.log(array_strings(["ashraf", "osama", "elkwawy", "shino"]));
/*========================================================================*/
// 15* Write a function that takes a string and checks if it's a palindrome.
const isPalindrome = (string) => {
  let reverse = string.split('').reverse().join('');
  return string === reverse;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("lol"));
console.log(isPalindrome("world"));
console.log(isPalindrome("فاف"));
/*=======================================================================================================================*/
// 16* Create a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
const ascendingSortedNumber = (arr) => {
  return arr.sort((x, y) => x - y);
}
console.log(ascendingSortedNumber([9,2,4,6,1,3,5,7,8]));
/*===========================================================================*/
// 17* Write a function that takes a number and returns an array of its digits.
const getDigits = (nums) => {
  // return nums.toString().split('').map((n) => Number(n));
  return nums.toString().split('').map(Number);
}
console.log(getDigits(98765));
/*==================================================================================================================================*/
// 18* Create a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
const more_five_characters = (arr) => {
  // if (!Array.isArray(arr)) {
  //   return "Error: Input is not an array";
  // }
  return arr.filter(string => string.length > 5);
}
console.log(more_five_characters(['ashraf', "nada", 'elkwawy', "lolo"]));
/*==============================================================================*/
// 19* Write a function that takes a string and returns the number of words in it.
const strLenght = (str) => {
  return str.split(' ').length;
}
console.log(strLenght('ashraf mohamed'));
/*=================================================================================*/
// 20* Create a function that takes an array of numbers and returns the median value.
const median_number = (array) => {
  // to sorted strings
  arr.sort((x, z) => x - z);
  let median = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    return array[median];
  } else {
    return (array[median - 1] + array[median]) / 2
  }
  // return array.length % 2 !== 0 ? array[median] : (array[median - 1] + array[median]) / 2;
}
console.log(median_number([1, 2, 3])); // 2
console.log(median_number([1, 2, 3, 4, 5])); // 3
console.log(median_number([1, 2, 3, 4, 5, 6, 7, 8])); // 4.5
console.log(median_number([1, 2, 3, 4, 5, 6])); // 3.5