let a;
let b;
let c;

// Code using window prompt
/*
a = window.prompt("Please enter input for a");
a = Number(a);

b = window.prompt("Please enter input for b");
b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// c = Math.pow(a, 2) + Math(b, 2);
// c = Math.pow(c)

c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

console.log(c);
*/

// Code with HTML
document.getElementById("result").onclick = function () {
  a = document.getElementById("aText").value;
  a = Number(a);

  b = document.getElementById("bText").value;
  b = Number(b);

  c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

  document.getElementById("cLabel").innerHTML = "Side C: " + c;
};
