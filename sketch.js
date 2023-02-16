let playing = false;
let fingers;
let button;
let tbutton;

function setup() {
  createCanvas(500, 500);
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/test2.webm', 'assets/test2.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid); // attach button listener
  intf = new Interface(this, 1);
  tbutton = new TestButton(intf, 20, 20, 100, 40, "test", sayHi);
  intf.addWidget(tbutton);
  print(intf);
}

function draw() {
  background(150, 0, 0);
  intf.update();
}

function sayHi() {
  print("hi!");
}

function mousePressed() {
  intf.mousePressed();
}

function mouseMoved() {
  intf.mouseMoved();
}

function mouseDragged() {
  intf.mouseDragged();
}

function mouseReleased() {
  intf.mouseReleased();
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
