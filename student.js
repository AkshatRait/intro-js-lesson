/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:


// 1. Declare 2 variables below:
    let cars;
    let engine;
    let goodEngine;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
    engine = "v8";

    // 3. Assign one to the type Boolean below:
    engine= true;

    // 4. Assign one to the type String below:
    cars = 9;

console.log(cars);
console.log(engine);
*/







// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.
/*
 function doubleNumber(p1) {
    console.log(p1 * 2);
    return p1 * 2;
  }
doubleNumber(2);
doubleNumber(7);
// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square
function squareNumber(p1) {
    console.log(p1 * p1);
    return p1 * p1;
  }
squareNumber(6)


// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers
  const activity3 = function productNumber(p1 , p2){
        console.log(p1 * p2);
        return p1 * p2;
  }
  activity3(6, 6)

const activity5 = (x1 , x2) => {
    console.log(x1 * x2);
    return x1 * x2;
}
activity5(5 , 5) 
*/
/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let sum = sumOfThree(2, 4, 6);
 console.log(sum);
// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.
function productOfThree(num1, num2, num3){
  return num1 * num2  * num3;
}

let product = productOfThree(10, 5, 1);
console.log(product)
// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number
/*function getRemainder( num1, num2){
  return num1 % num2;
}

let remainder = getRemainder(5 , 2);
console.log(remainder);
 */
/*
const problem3 = (num1 , num2) => {
    console.log(num1 % num2);
    return num1 % num2;
}
problem3(5 , 2)
// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
function getRootRounded(num){
  return Math.ceil(Math.sqrt(Math.abs(num)));

}
  console.log (getRootRounded(11));
// 5. Create a getRandom function that returns a random number from 1-100.
function getRandom(min, max) {
  return (Math.random() * 100);
}
console.log(getRandom());
*/

// 1. Create a getPersonStats function statement that takes in 3 Strings: name, job, age. The function should console log a statement such as "Hi my name is [NAME], I am [AGE] years old, and I am a [JOB]".
const getPersonStats = function(str) {
  const firstName = "Akshat";
  const age = "17";
  const job = "student";
  console.log(`Hi my name is ${firstName}, I am ${age} years old, and I am a ${job}.`)
}
getPersonStats();


// 2. Create a sayFirstAndLast function expression that takes in 1 String parameter and console logs "the first character is: [firstChar] and last character is: [lastChar]".
const sayFirstAndLast = function(str) {
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  console.log(`The first character is: ${firstChar} and the last character is: ${lastChar}`);
}
sayFirstAndLast('hello'); 

// 3. Create a yellFruitNum arrow function that takes in 1 number parameter, 1 String that is a fruit parameter, and console logs the sentence "I have [number] [FRUIT]" in all caps.
const yellFruitNum = (num, fruit) => {
  console.log(`I have ${num} ${fruit.toUpperCase()}!`);
}
yellFruitNum(5, 'apples'); 

// 4. Create a sliceFruit function that takes in a String of a fruit and console logs everything except the first 2 letters.
function sliceFruit(fruit) {
  console.log(fruit.slice(2));
}
sliceFruit('banana'); 

// 5. Create a splitFruit function that takes in a String of a fruit and returns an array of the letters split into each index of the array.
function splitFruit(fruit) {
  return fruit.split('');
}
const result = splitFruit('orange');
console.log(result); 