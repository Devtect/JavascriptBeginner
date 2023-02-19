//Math -> An intrinsic object that provides basic mathematics functionality and constants.

let x = 3.14;
let y = 5;
let z = 8;
let maximum;
let minimum;

// x = Math.round(x); rounds the number to closest integer
// x = Math.floor(x); rounds the number down
// x = Math.ceil(x); rounds the number up
// x = Math.pow(x, 2); raise the value of given power after comma
// x = Math.sqrt(x); returns the square root of the value
// x = Math.abs(x); returns the absolute value, distance away from 0
maximum = Math.max(x, y, z); // returns the maximum number between x, y and z and assign it to maximum
minimum = Math.min(x, y, z); // returns the minimum number between x, y and z and assign it minimum
// x = Math.PI; built in constant for pi

document.getElementById("p1").innerHTML = "Value of x is: " + x;
document.getElementById("p2").innerHTML = "Value of y is: " + y;
document.getElementById("p3").innerHTML = "Value of z is: " + z;

console.log(x);
