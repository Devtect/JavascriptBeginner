// const is a variable that cannot be changed
// It is good practice to use const if you are sure that the variable will NOT be changed later in the code. It also adds data security to your code.
// line 6 to 15 variable 'pi' is declared with 'let'
// line 19 to 39 variable 'PI' is declared with 'const'
// uncomment the lines to see the difference between them

/*
let pi = 3.14159; 
let radius;
let circumference;

radius = window.prompt("Please enter the radius of the circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log("The circumference is", circumference);
*/

const PI = 3.14159; // Common naming practice is that you make all the letters capital for const variable.
let radius;
let circumference;

radius = window.prompt("Please enter the radius of the circle");
radius = Number(radius);

// PI = 420.69; if you uncomment this line you will get an error 'Uncaught TypeError: Assignment to constant variable' because PI is declared with const.

circumference = 2 * PI * radius;

console.log("The circumference is", circumference);
