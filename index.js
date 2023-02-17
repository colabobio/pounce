let playing = true;
let tutorial;
let button;

function preload() {
  tutorial = createVideo(['assets/Grabbite-tutorial.mp4', 'assets/Grabbite-tutorial.webm']);  
  tutorial.hide();
}

function setup() {
  createCanvas(1000, 600);

  tutorial.loop();

  intf = new Interface(this, 1);
  intf.addFont("assets/Montserrat-Bold.ttf");

  button = new TestButton(intf, 800, 20, 100, 40, "playButton", toggleVid);
  intf.addWidget(button);  
}

function draw() {
  background("#333333");

  push();
  intf.setFont("assets/Montserrat-Bold.ttf", 35);
  fill("#D6D4D4");
  text("Dog behavior Video Annotation", 100, 30);
  pop();

  stroke("#CBDF52");
  line(20, 70, 640, 70);

  fill("#CBDF52");
  noStroke();
  ellipse(20, 70, 30, 30);
  ellipse(250, 70, 30, 30);

  ellipse(460, 70, 10, 10);
  ellipse(550, 70, 10, 10);
  ellipse(640, 70, 10, 10);

  tutorial.size(640, 360); 
  image(tutorial, 20, 150, 640, 360);
  intf.update();
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

function toggleVid() {
  if (playing) {
    tutorial.pause();
  } else {
    tutorial.loop();
  }
  playing = !playing;
}
