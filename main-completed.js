let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);

function sortArray(arr) {
  let result = arr.sort((a, b) => a - b);
  return result;
}

function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

function isEven(x) {
  let remainder = x % 2;
  if (remainder !== 0) {
    return false;
  }
  if (remainder === 0) {
    return true;
  }
}

function getOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!isEven(element)) {
      result.push(element);
    }
  }
  return result;
}

function getEven(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (isEven(element)) {
      result.push(element);
    }
  }
  return result;
}

// optional
function getOddAndEven(arr) {
  let odd = [],
    even = [];
  arr.forEach((elem) => {
    if (isEven(elem)) {
      even.push(elem);
    } else {
      odd.push(elem);
    }
  });
  return [odd, even];
}

function getBiggestArray(firstArr, secondArr) {
  let firstSum = calculateTotal(firstArr);
  let secondSum = calculateTotal(secondArr);
  if (firstSum > secondSum) {
    return firstArr;
  } else {
    return secondArr;
  }
}

// let sortedData = sortArray(data);
calculateTotal(data);
let sum = calculateTotal(data);
console.log(sum);

let isItEven = isEven(sum);
if (isItEven) {
  console.log("Array is even.");
} else {
  console.log("Array is odd.");
}

let oddNumbers = getOdd(data);
console.log(oddNumbers);
let evenNumbers = getEven(data);
console.log(evenNumbers);
// let [odd, even] = getOddAndEven(data);
// console.log("odd:");
// console.log(getOddAndEven(data));

let big = getBiggestArray(oddNumbers, evenNumbers);
console.log("Biggest array:");
console.log(big);

// function c(x) {
//   return x * 5;
// }

function apply(arr, c) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arr[i] = c(element);
  }
}

apply(big, (x) => x * 5);
console.log(big);
