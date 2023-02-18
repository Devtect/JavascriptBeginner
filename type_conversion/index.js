// Type conversion is changing the data type of a value to another (string, number, boolean)

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old now!");
*/

let x, y, z;

x = Number("3.14"); // if you try to convert something that can't be a number, you will get a NaN(not a number) error.
y = String(3.14);
z = Boolean(""); // if the string is empty boolean will return 'false', if there is a text it will return 'true'. Useful for accepting user inputs.

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
