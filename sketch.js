let playing = false;
let fingers;
let button;

function setup() {
  noCanvas();
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/test2.webm', 'assets/test2.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
}

// plays or pauses the video depending on current state
function toggleVid() {
  if (playing) {
    fingers.pause();
    button.html('play');
  } else {
    fingers.loop();
    button.html('pause');
  }
  playing = !playing;
}