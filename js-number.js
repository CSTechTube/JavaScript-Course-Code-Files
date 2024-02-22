// 2 Types of JS number declaration

let number = 4500;
console.log(typeof number);

let number2 = new Number(450);
console.log(typeof number2);
console.log(number2);

// Number Operation Methods
let price = 199.45578454;
console.log(price.toFixed(2));

let price2 = 45454564;
console.log(price2.toString().length);

let price3 = 100000000;
console.log(price3.toLocaleString());

// Maths Library Built In Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// |-5| = 5
//  |5| = 5
// absolute
console.log(Math.abs(5));

// ceiling
console.log(Math.ceil(4.2));

// floor
console.log(Math.floor(8.9));

// random value generator
console.log(Math.random());

let price5 = Math.floor(Math.random() * 10);
console.log(price5);

// dice game example
let max = 6;
let min = 1;
let dice = Math.floor(Math.random() * (max - min + 1) + min);
console.log(dice);

// power
console.log("Power=", Math.pow(2, 3));

// square root
console.log(Math.sqrt(16));
