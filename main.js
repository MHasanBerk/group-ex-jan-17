let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

//--------------------------------//

function doSort(a, b) {
  return a - b;
}

console.log(data.sort(doSort));

//--------------------------------//
function total(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(total(data));
//--------------------------------//

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

if (isEven(total(data))) {
  console.log("Array is even");
} else {
  console.log("Array is odd");
}
//--------------------------------//

function extractEven(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function extractOdd(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isEven(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

//--------------------------------//

function calc(arr) {
  let odd = total(extractOdd(arr));
  let even = total(extractEven(arr));
  if (odd >= even) {
    console.log("Odd numbers are greater or equal to the even numbers.");
  } else {
    console.log("Even numbers are greater than odd numbers.");
  }
}

calc(data);

//--------------------------------//
