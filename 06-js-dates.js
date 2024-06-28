// Date Formats

let date1 = new Date("2024-02-12");
let date2 = new Date(2021, 0, 15, 22, 46);
let date3 = new Date();

console.log("ISO Format =", date3.toISOString());

console.log("Short Format =", date3.toLocaleString());

console.log("Long Format =", date3.toDateString());

// Date get() methods

console.log("\nget year = ", date3.getFullYear());

console.log("\nget month = ", date3.getMonth() + 1);

console.log("\nget date = ", date3.getDate());

console.log(
  `${date3.getDate()}/${date3.getMonth() + 1}/${date3.getFullYear()}`
);

// Date set() methods

date2.setFullYear(2045);

date2.setMonth(2);

date2.setDate(17);

console.log("Short Format =", date2.toDateString());
