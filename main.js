function displayAndy() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Andy Low";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhs";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite1.png";
}

function displayAshlyn() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Ashlyn";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhsjfh\
       sdfhsahfjsafhsahfshfjsdlfsdlhfsd";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite2.png";
}

function displayEmily() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Emily";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhsjfhshfhfjk\
         sdfhsahfjsafhsahfshfjsdlfsdlhfsd";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite3.png";
}

function displayFernando() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Fernando";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhsjfhshfhfjksfhjfhsfs\
         sdfhsahfjsafhsahfshfjsdlfsdlhfsd";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite4.png";
}

function displayNahyun() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Nahyun";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhsjfhshfh\
           sdfhsahfjsafhsahfshfjsdlfsdlhfsd";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite5.png";
}

function selected() {
  const summary = document.querySelector(".summary-img");
  summary.style.display = "block";
  const selectCharacter = document.getElementById("characterSelect");
  selectCharacter.style.display = "block";
}
