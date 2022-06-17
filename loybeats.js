//asking for user name
playername = prompt("Enter your name:");

// // //displaying name in the menu bar
document.getElementById("user").innerHTML = playername;

//looping pads
for (let index = 0; index <= 8; index++) {
  document
    .getElementsByClassName("pads")
    [index].addEventListener("click", function () {
      console.log("suipot");
      playsoundclick(this); //passing "this" into the function playsound
    });
}

function buttonToggle() {
  const buttonElement = document.getElementsByClassName("button");

  //code that when you click the class button[0] the remaining buttons will be disable and back to normall when getting clicked again
  buttonElement[0].addEventListener("click", function () {
    buttonElement[1].classList.toggle("button_disable");
    buttonElement[1].toggleAttribute("disabled");
    buttonElement[2].classList.toggle("button_disable");
    buttonElement[2].toggleAttribute("disabled");
  });
  buttonElement[1].addEventListener("click", function () {
    buttonElement[0].classList.toggle("button_disable");
    buttonElement[0].toggleAttribute("disabled");
    buttonElement[2].classList.toggle("button_disable");
    buttonElement[2].toggleAttribute("disabled");
  });
  buttonElement[2].addEventListener("click", function () {
    buttonElement[0].classList.toggle("button_disable");
    buttonElement[0].toggleAttribute("disabled");
    buttonElement[1].classList.toggle("button_disable");
    buttonElement[1].toggleAttribute("disabled");
  });
}

//function hiding an element when a button was clicked
function hideElement() {
  document.getElementById("mssgePick").classList.toggle("displayNone");
}

//know what is the user pressing in the entire html
document.addEventListener("keypress", function (event) {
  playsoundKBpressed(event); //passing "this" into the function playsound
});

//function for playing sound when yhe desired keboard gets clicked
function playsoundKBpressed(event) {
  const element = document.getElementsByClassName("pads");

  if (event.key === "q") {
    var beat1 = new Audio("beats/sound1.wav");
    beat1.play();
    element[0].classList.toggle("padsStyle");
    setTimeout(function () {
      element[0].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "w") {
    var beat1 = new Audio("beats/sound2.wav");
    beat1.play();
    element[1].classList.toggle("padsStyle");
    setTimeout(function () {
      element[1].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "e") {
    var beat1 = new Audio("beats/sound3.wav");
    beat1.play();
    element[2].classList.toggle("padsStyle");
    setTimeout(function () {
      element[2].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "a") {
    var beat1 = new Audio("beats/sound4.mp3");
    beat1.play();
    element[3].classList.toggle("padsStyle");
    setTimeout(function () {
      element[3].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "s") {
    var beat1 = new Audio("beats/sound5.wav");
    beat1.play();
    element[4].classList.toggle("padsStyle");
    setTimeout(function () {
      element[4].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "d") {
    var beat1 = new Audio("beats/sound6.wav");
    beat1.play();
    element[5].classList.toggle("padsStyle");
    setTimeout(function () {
      element[5].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "z") {
    var beat1 = new Audio("beats/sound7.mp3");
    beat1.play();
    element[6].classList.toggle("padsStyle");
    setTimeout(function () {
      element[6].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "x") {
    var beat1 = new Audio("beats/sound8.mp3");
    beat1.play();
    element[7].classList.toggle("padsStyle");
    setTimeout(function () {
      element[7].classList.remove("padsStyle");
    }, 100);
  } else if (event.key === "c") {
    var beat1 = new Audio("beats/sound9.mp3");
    beat1.play();
    element[8].classList.toggle("padsStyle");
    setTimeout(function () {
      element[8].classList.remove("padsStyle");
    }, 100);
  }
}

//function for playing sound when yhe button gets clicked
function playsoundclick(ev) {
  //making a variable for elemets
  element = document.getElementsByClassName("pads");

  //switch condition
  switch (ev) {
    case element[0]:
      //playsound
      var beat1 = new Audio("beats/sound1.wav");
      beat1.play();
      break;
    case element[1]:
      var beat2 = new Audio("beats/sound2.wav");
      beat2.play();
      break;
    case element[2]:
      var beat2 = new Audio("beats/sound3.wav");
      beat2.play();
      break;
    case element[3]:
      console.log("asd");
      var beat2 = new Audio("beats/sound4.wav");
      beat2.play();
      break;
    case element[4]:
      var beat2 = new Audio("beats/sound5.wav");
      beat2.play();
      break;
    case element[5]:
      var beat2 = new Audio("beats/sound6.wav");
      beat2.play();
      break;
    case element[6]:
      var beat2 = new Audio("beats/sound7.mp3");
      beat2.play();
      break;
    case element[7]:
      var beat2 = new Audio("beats/sound8.mp3");
      beat2.play();
    case element[8]:
      var beat2 = new Audio("beats/sound9.mp3");
      beat2.play();
      break;
    default:
      break;
  }
}

//calling the function
buttonToggle();
