var n = document.querySelectorAll(".drum").length;
var volumeControl = document.getElementById("volume");
var currentVolume = 1; // Default volume

// Update current volume when the slider value changes
volumeControl.addEventListener("input", function () {
    currentVolume = volumeControl.value;
});

for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    var audio;

    switch (key) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            audio = new Audio('sounds/crash.mp3');
            break;
        case "k":
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case "l":
            audio = new Audio('sounds/snare.mp3');
            break;
        default:
            console.log(buttonInnerHTML);
            return; // Exit if no valid key is pressed
    }

    audio.volume = currentVolume; // Set the volume to the current volume level
    audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) { // Check if activeButton exists
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
