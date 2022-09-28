function changeBlue() {
  var y = document.getElementById("summary-title")
  y.style.backgroundColor = "#7F8DE2"

  var x = document.querySelectorAll("button")
  x.forEach(button => {
    if (button.id != "selector") {
      button.style.backgroundColor = "#7F8DE2"
    }
  });
}

function changePink() {
  var y = document.getElementById("summary-title")
  y.style.backgroundColor = "#ee959e"
  var x = document.querySelectorAll("button")
  x.forEach(button => {
    if (button.id != "selector") {
      button.style.backgroundColor = "#ee959e"
    }
  });
}

function changeGreen() {
  var y = document.getElementById("summary-title")
  y.style.backgroundColor = "#77DD77"
  var x = document.querySelectorAll("button")
  x.forEach(button => {
    if (button.id != "selector") {
      button.style.backgroundColor = "#77DD77"
    }
  });
}

function displayAndy() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Andy Low";

  // Insert your details here
  document.getElementById("summary-text").innerHTML = 
  "\"Don't give up on your dreams, go back to sleep.\"" + "<br>" + "<br>" +

  "<u>" + "Skills" + "</u>" + "<br>" +
  " CSS/HTML 56/100" + "<br>" + 
  "Java 89/100" + "<br>" + 
  "C 0/100" + "<br>" +
  "RGB Keyboard +500 HP" + "<br>" + "<br>" +

  "<u>" + "Projects" + "</u>" + "<br>" +
  "| Walorant | Tesla Hacking |" + "<br>" +
  "| Nasa Artemis 1 | MYKI Alert App |"

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite0.png";
}

function displayAshlyn() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Ashlyn";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
  "\"Oops, not again.\"" + "<br>" + "<br>" +

  "<u>" + "Skills" + "</u>" + "<br>" +
  " Python 10/100" + "<br>" +
  "HTML 5/100" + "<br>" +
  "Scratch 24/100" + "<br>" +
  "Pendant +5 Charisma" + "<br>" + "<br>" +

  "<u>" + "Projects" + "</u>" + "<br>" +
  "| Scribble It | VR Circus Sim |" + "<br>" +
  "| Pingu Scholar | Python Snake Game |"

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite2.png";
}

function displayFernando() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Fernando";


  // Insert your details here
  document.getElementById("summary-text").innerHTML =
  "\"My quote comes here and here comes my quote...\"" + "<br>" + "<br>" +

  "<u>" + "Skills" + "</u>" + "<br>" +
  "Python 69/100" + "<br>" + 
  "C++ 78/100" + "<br>" + 
  "Java 98/100" + "<br>" +
  "Golden Horseshoe +50 Luck" + "<br>" + "<br>" +

  "<u>" + "Projects" + "</u>" + "<br>" +
  "| Twilight.com | Henry VIII Crown Hunt |" + "<br>" +
  "| Venture Map | Bigfoot Tracker |"

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./sprites/sprite4.png";
}

function displayNahyun() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Nahyun";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
  "\"I am here for moral support...\"" + "<br>" + "<br>" +

  "<u>" + "Skills" + "</u>" + "<br>" +
  "Python 30/100" + "<br>" +
  "Scratch 55/100" + "<br>" +
  "Procrastination 91/100" + "<br>" +
  "Magic Wand +420 Attack" + "<br>" + "<br>" +

  "<u>" + "Projects" + "</u>" + "<br>" +
  "| Kanvas | Math Solver |" + "<br>" +
  "| PenGoogle | Python Snake Game |"

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
  // Adds borders to character card
  const title = document.getElementById("summary-title")
  title.style.borderBottom = "solid 4px var(--black)";
  title.style.borderRight = "solid 4px var(--black)";
  title.style.borderTopRightRadius = "0px";

  const body = document.getElementById("summary-body")
  body.style.borderRight = "solid 4px var(--black)";
  body.style.paddingTop = "90px"

  const hidden = document.getElementById("hidden")
  hidden.style.borderRight = "solid 4px var(--black)"
  
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
