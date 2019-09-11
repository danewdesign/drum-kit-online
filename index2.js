// variable for total length of drum buttons array
var allDrumButtons = document.getElementsByClassName("drum").length;

// loop that cycles through all buttons to apply needed action
for (var i = 0; i < allDrumButtons; i++) {

// function to make sound and animate button visually upon button click
  document.getElementsByClassName("drum")[i].addEventListener("click", function () {
    var buttonTextContent = this.textContent;
    makeSound(buttonTextContent);
    animateButton(buttonTextContent);
  });
}

// function to make sound upon key press
  document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animateButton(event.key);
  });

// function to assign sound to particular key
function makeSound(key) {
  switch (key) {
    case "a":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var kick = new Audio ("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "d":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
      break;
    case "f":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(this.textContent);
  }
}

// function to animate button visually
function animateButton(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
