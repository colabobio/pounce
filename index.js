let intf;
let header;
let panel;
let vcontainer;
let nbutton;
let gbutton;

let videos;
let startImages;
let endImages;

function preload() {
  tutorial = createVideo(['assets/Grabbite-tutorial.mp4', 'assets/Grabbite-tutorial.webm']);  
  tutorial.hide();  

  tracking1 = createVideo(['assets/DogTracking1.mp4', 'assets/DogTracking1.webm']);
  tracking1.hide();

  tracking2 = createVideo(['assets/DogTracking2.mp4', 'assets/DogTracking2.webm']); 
  tracking2.hide();

  tracking3 = createVideo(['assets/DogTracking3.mp4', 'assets/DogTracking3.webm']);
  tracking3.hide();
  
  videos = [tutorial, tracking1, tracking2, tracking3];

  tutorialStart = loadImage('assets/Grabbite-tutorial-start.png');
  track1Start = loadImage('assets/DogTracking1-start.png');
  track2Start = loadImage('assets/DogTracking2-start.png');
  track3Start = loadImage('assets/DogTracking3-start.png');

  startImages = [tutorialStart, track1Start, track2Start, track3Start]

  tutorialEnd = loadImage('assets/Grabbite-tutorial-end.png');
  track1End = loadImage('assets/DogTracking1-end.png');
  track2End = loadImage('assets/DogTracking2-end.png');
  track3End = loadImage('assets/DogTracking3-end.png');

  endImages = [tutorialEnd, track1End, track2End, track3End]
}

function setup() {
  createCanvas(1000, 600);

  intf = new Interface(this, 1);
  intf.addFont("assets/Montserrat-Bold.ttf");
  intf.addFont("assets/Montserrat-SemiBold.ttf");
  intf.addFont("assets/Montserrat-Regular.ttf");

  header = new Header(intf, 0, 0, 680, 200);
  intf.addWidget(header);

  nbutton = new NextButton(intf, 830, 95, 40, 40, nextStep);
  intf.addWidget(nbutton);
  nbutton.hide();
  
  panel = new SidePanel(intf, 750, 200, 200, 360);
  intf.addWidget(panel);
  panel.showIntroText();

  gbutton = new GrabBiteButton(intf, 50, 300, 100, 40, grabBiteClicked);
  intf.addWidget(gbutton, panel);
  gbutton.deactivate();

  vcontainer = new VideoContainer(intf, 0, 200, 680, 360, videos, startImages, endImages, header);
  intf.addWidget(vcontainer);

  tutorial.onended(tutorialEnded);
  tracking1.onended(videoEnded);
  tracking2.onended(videoEnded);
  tracking3.onended(videoEnded);
}

function draw() {
  background("#333333");
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

function grabBiteClicked() {
  print("Detected grab-bite click");
}

function tutorialEnded() {
  vcontainer.lastFrame();
  header.nextStage();
  nbutton.show();
  panel.showNextText();  
}

function nextStep() {
  header.nextStage();
  vcontainer.nextVideo();
  vcontainer.firstFrame();  
  nbutton.hide();
  panel.showActionText();
  gbutton.activate();
}

function videoEnded() {
  header.nextStage();
  vcontainer.lastFrame();
  if (vcontainer.idx == 3) {
    panel.showCongratulations();
    gbutton.deactivate();
  } else {
    panel.showNextText();
    nbutton.show();
  }
}