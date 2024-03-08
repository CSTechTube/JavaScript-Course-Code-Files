// Array Documentation => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Array Declaration

let array1 = [45, 784, 2656, "hello", "cstechtube"];

console.log(array1);
console.log(array1[3]);
console.log(array1.length);

// Array Methods()

array1.push(25);
console.log(array1);

array1.unshift("welcome");
console.log(array1);

array1.pop();
console.log(array1);

array1.shift();
console.log(array1);

let originalArray = [
  45,
  784,
  2656,
  "hello",
  "cstechtube",
  78,
  4857,
  6644,
  354164,
  464,
];
console.log("Original Array =", originalArray);

console.log("slice", originalArray.slice(1, 7));
// Note Slice 2nd parameter in exlusive and create new copy of result array

console.log("splice", originalArray.splice(1, 7));
// Note Slice 2nd parameter in inclusive and directly edit in original array does not create new result copy.

// console.log("Original Array =", originalArray);

console.log("Original Array =", originalArray.includes(4644343));

console.log(originalArray.indexOf("cstechtube"));

console.log(Array.from("CSTECHTUBE"));

let num1 = 12;
let num2 = 13;
let num3 = 14;

console.log(Array.of(num1, num2, num3));

let arr1 = [1, 2, 3, 4, 5, 74, 8];
let arr2 = [78, 879, 5, 65453, 1541];

// concatenation
arr1.concat(arr2);

// nester array
arr1.push(arr2);
// console.log(arr1[7][0]);

// Spread Opertor

let arr45 = [78, 46, 4654, 68, 564, 654, 654165, 4];

// create another copy of array
let arr46 = [...arr45];

// concatenate 2 array
let arr66 = [...arr45, ...arr46];

console.log(arr66);

// deleted all array elements
arr45.length = 0;

// console.log(arr45);

// Array Loops

let arr45 = [78, 46, 4654, 68, 564, 654, 654165, 4];

for (let i in arr45) {
  console.log(i, arr45[i]);
}

for (let k of arr45) {
  console.log(k);
}

// Code File => https://github.com/CSTechTube/JavaScript-Course-Code-Files
