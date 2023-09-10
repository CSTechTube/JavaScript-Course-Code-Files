

let fName = "Rohit";  // op = string
// console.log(typeof fName);

let marks = 45;   // op = number
// console.log(typeof marks);

let isCorrect = true;   // op = boolean
// console.log(typeof isCorrect);

let test4;   // op = undefine
// console.log(typeof test4);

let test5 = null;  // op = object
// console.log(typeof test5);

let num6 = BigInt(123456789123456789123456789);   // op = bigint
// console.log(typeof num6);


// Special Case due to JS Limitation of Strict Check

let sp1 = 16 + "Rohit";  // op = 16Rohit
//console.log(sp1);

let sp2 = 16 + 4 + "Rohit";  // op = 20Rohit
// console.log(sp2);

let sp3 = "Rohit" + 16 + 4;  // op = Rohit164
// console.log(sp3);

let sp5 = "Darsh"
sp5 = 1;
console.log(sp5);  // op = 1  js Override the data irrespective of datatype




