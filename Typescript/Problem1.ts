// Project Euler
// Problem 1: Multiples of 3 and 5

// Description: If we list all the natural number bellow 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23

// Objective: Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

// Solution: For this given problem we iterate from 0 to n, where n is the given parameter value number
// In each iteration we evaluate if the current number is multiple of 3 or 5 by using the module
// operator.

function SumAllMultiplesOf3And5(value: number): number {
  let sum: number = 0;
  for (let currentNumber: number = 0; currentNumber < value; currentNumber++) {
    if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      sum += currentNumber;
    }
  }
  return sum;
}

function main(): void {
  console.log(SumAllMultiplesOf3And5(10) === 23);
  console.log(SumAllMultiplesOf3And5(49) === 543);
  console.log(SumAllMultiplesOf3And5(1000) === 233168);
  console.log(SumAllMultiplesOf3And5(8456) === 16687353);
  console.log(SumAllMultiplesOf3And5(19564) === 89301183);
}

main();
