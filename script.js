
let songs = [
  { name: "Song 1", file: "song1.mp3" },
  { name: "Song 2", file: "song2.mp3" },
  { name: "Song 3", file: "song3.mp3" }
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");

function loadSong(i) {
  audio.src = songs[i].file;
  title.innerText = songs[i].name;
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextSong() {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
}

function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
}


loadSong(index);
