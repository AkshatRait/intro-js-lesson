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
