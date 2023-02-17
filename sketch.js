let playing = false;
let tutorial;
let button;
let tbutton;

function setup() {
  // createCanvas(500, 500);
  noCanvas();
  // specify multiple formats for different browsers
  tutorial = createVideo(['assets/Grabbite-tutorial.mp4', 'assets/Grabbite-tutorial.webm']);
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
    tutorial.pause();
    button.html('play');
  } else {
    tutorial.loop();
    button.html('pause');
  }
  playing = !playing;
}
