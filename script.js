const song = new Audio('https://videotourl.com/audio/1792454730193-7c098cba-8722-44db-b387-7ae7ee49b33c.mp3');

const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');

playButton.addEventListener('click', function() {
    song.play().catch(function(error) {
        console.error(error);
    });
});

pauseButton.addEventListener('click', function() {
    song.pause();
});
