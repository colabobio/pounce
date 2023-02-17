let playing = true;
let tutorial;
let button;

function preload() {
  tutorial = createVideo(['assets/Grabbite-tutorial.mp4', 'assets/Grabbite-tutorial.webm']);  
  tutorial.hide();
}

function setup() {
  createCanvas(1000, 600);

  intf = new Interface(this, 1);
  intf.addFont("assets/Montserrat-Bold.ttf");
  intf.addFont("assets/Montserrat-SemiBold.ttf");
  intf.addFont("assets/Montserrat-Regular.ttf");

  // let pbutton = new TestButton(intf, 800, 20, 100, 40, "playButton", toggleVid, "play");
  // intf.addWidget(pbutton);


  header = new Header(intf, 0, 0, 680, 200, "header", lmargin=40);
  intf.addWidget(header);

  let nbutton = new NextButton(intf, 800, 80, 40, 40, "nextButton", nextStep);
  intf.addWidget(nbutton);
  

  panel = new SidePanel(intf, 750, 200, 200, 360, "sidePanel");
  intf.addWidget(panel);

  let gbutton = new TestButton(intf, 50, 300, 100, 40, "pounceButton", toggleVid, "grab-bite");
  intf.addWidget(gbutton, panel);

}

function draw() {
  background("#333333");



  tutorial.size(640, 360); 
  image(tutorial, 40, 200, 640, 360);
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

function nextStep() {


}

function toggleVid() {
  if (playing) {
    tutorial.pause();
  } else {
    tutorial.loop();
  }
  playing = !playing;
}
