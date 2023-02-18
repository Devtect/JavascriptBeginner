console.log("Nissan S14");
console.log("is the best car");

// window.alert("NISSAN S14");

// This is a comment
/*
    This is a sandwich comment
    Like ham sandwich
    but in js
*/

// Variable is a container for storing data
// Variable behaves as if it was the value that it contains

// 1. Declaring variable (var, let, const)
// 2. Assigning data     (= assignment operator)

//let top_speed;                      //let top_speed = 245;          Does the same thing, but there might be a case where
//top_speed = 235;                    //console.log(top_speed)        we need to asign a variable later on in the code. (Like accepting a user input)
//console.log(top_speed);

let brand = "Nissan S14"; //string
let top_speed = 235; //number
let jdm = true; //boolean

console.log("Car name:", brand);
console.log("Top speed is:", top_speed);
console.log("Is it a JDM car:", jdm);

document.getElementById("p1").innerHTML = "Car name: " + brand;
document.getElementById("p2").innerHTML = "Top speed is: " + top_speed + " km/h";
document.getElementById("p3").innerHTML = "Is it a JDM car: " + jdm;
