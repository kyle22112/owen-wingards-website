const cover = document.querySelector("#cover");
var pause = document.querySelector("#music-js");
var pauseBtn = document.querySelector("#pause-btn");
let playIcon = document.querySelector("#play-icon");
let pauseIcon = document.querySelector("#pause-icon");
var song1 = new Audio('NorxForever.mp3');


var musicPlaying = false;

// Open the site
cover.addEventListener("click", () => {
    musicPlaying = true;
    cover.style.filter = "opacity(0%)";
    cover.style.pointerEvents = "none";
    song1.play();
    song1.loop = true;
});



// Handle pausing and playing
pauseBtn.addEventListener("click", () => {    
    if (musicPlaying === true){
        song1.pause();
        musicPlaying = false;
        pause.innerHTML = " Play Music";
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";

    }
     else if (musicPlaying === false){
        song1.play();
        musicPlaying = true;
        pause.innerHTML = " Pause Music";
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }
});







