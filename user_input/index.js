// How to accept user input

// Easy way (window prompt)

//let username = window.prompt("What is your name?: ");
//console.log(username);

// Hard way (html text box)

let username;
document.getElementById("submit_button").onclick = function () {
  username = document.getElementById("text_box").value;
  console.log(username);
  document.getElementById("name_label").innerHTML = "Hello " + username;
};
