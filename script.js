window.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.muted = false;
    audio.play();
}, { once: true });
