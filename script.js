const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songList = document.getElementById('song-list');
const songs = [
    { title: 'Rahmatun Lilalameen', src: './assets/music/Rahmatun.mp3' },
    { title: 'Ya Quluban', src: './assets/music/Ya Quluban.mp3' },
    { title: 'Wedding Nasheed', src: './assets/music/Weddd Nashee.mp3' },
    { title: 'Song 4', src: 'ong4.mp3' },
    { title: 'Song 5', src: 'ong5.mp3' }
];
let currentSongIndex = 0;

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
});

prevButton.addEventListener('click', () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    updateSong();
});

nextButton.addEventListener('click', () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    updateSong();
});

songList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentSongIndex = Array.prototype.indexOf.call(songList.children, e.target);
        updateSong();
    }
});

function updateSong() {
    audio.src = songs[currentSongIndex].src;
    audio.play();
    playPauseButton.textContent = 'Pause';
}