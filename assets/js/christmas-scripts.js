// array of all <audio> elements
const audioFiles = document.querySelectorAll('audio');
// automatically play next track, if there is one
for (let i = 0; i < audioFiles.length; i++) {
  audioFiles[i].onplay = (e) => {
    // style container div to show which track is playing
    e.target.parentElement.classList.add('playing');
    // stop playback of other tracks
    for (let j = 0; j < audioFiles.length; j++) {
      if (j === i) {
        // this is the current track, and should not be paused
      } else {
        // pause any other track that was playing and reset time to 0
        audioFiles[j].pause();
        audioFiles[j].currentTime = 0;
      }
    }
  };
  audioFiles[i].onended = (e) => {
    // remove styling that shows track was playing
    e.target.parentElement.classList.remove('playing');
    // play next track (if there is one)
    if (i === (audioFiles.length - 1)) {
      // no more tracks to play, so nothing to do
    } else {
      audioFiles[i+1].play();
    }
  };
  audioFiles[i].onpause = (e) => {
    e.target.parentElement.classList.remove('playing');
  };
}

// allow user to play song by clicking on title
const songTitles = document.querySelectorAll('h2');
for (let i = 0; i < songTitles.length; i++) {
  songTitles[i].onclick = (e) => {
    if (e.target.nextElementSibling.paused) {
      e.target.nextElementSibling.play();
    } else {
      e.target.nextElementSibling.pause();
    }
  }
}
