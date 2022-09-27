function changeBlue() {
  var x = document.querySelectorAll("button")
  x.forEach(button => {
    button.style.backgroundColor = "dodgerblue"
  });
}

function changePink() {
  var x = document.querySelectorAll("button")
  x.forEach(button => {
    button.style.backgroundColor = "#ee959e"
  });
}

function changeGreen() {
  var x = document.querySelectorAll("button")
  x.forEach(button => {
    button.style.backgroundColor = "greenyellow"
  });
}

function displayAndy() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Andy Low";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    "adndhjkdjksfklfjksfhjkslfhsdhad";

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

function goToPage() {
  // NOTE: the html filename must match your "summary-title" name you inserted above completely
  var title = document.getElementById("summary-title").innerHTML;

  // Formats the href appropriately
  title = title.replace(/\s+/g, "-").toLowerCase();
  location.href = "./pages/" + title + ".html";
}

// Used to check if any name is selected
function selected() {
  // Removes image
  const image = document.getElementById("group-photo")
  image.style.display = "none";

  // Displays your sprite
  const summary = document.querySelector(".summary-img");
  summary.style.display = "block";

  // Displays the select button
  const selectCharacter = document.getElementById("characterSelect");
  selectCharacter.style.display = "block";
}
