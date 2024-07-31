let currentAudio = null;
function playSound(note) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
    }
    currentAudio = new Audio("sounds/" + note + ".mp3");
    currentAudio.play();
}
