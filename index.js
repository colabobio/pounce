let vcontainer;
let videos;
let cover;

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

  cover = loadImage('assets/video-cover.png');

}

function setup() {
  createCanvas(1000, 600);

  intf = new Interface(this, 1);
  intf.addFont("assets/Montserrat-Bold.ttf");
  intf.addFont("assets/Montserrat-SemiBold.ttf");
  intf.addFont("assets/Montserrat-Regular.ttf");

  header = new Header(intf, 0, 0, 680, 200, "header", lmargin=40);
  intf.addWidget(header);

  let nbutton = new NextButton(intf, 800, 80, 40, 40, "nextButton", nextStep);
  intf.addWidget(nbutton);
  

  panel = new SidePanel(intf, 750, 200, 200, 360, "sidePanel");
  intf.addWidget(panel);

  let gbutton = new Button(intf, 50, 300, 100, 40, "pounceButton", grabSelected, "grab-bite");
  intf.addWidget(gbutton, panel);

  vcontainer = new VideoContainer(intf, 0, 200, 680, 360, "vidContainer", null, cover, videos);
  intf.addWidget(vcontainer);

  tutorial.onended(videoEnded);
  tracking1.onended(videoEnded);
  tracking3.onended(videoEnded);
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

function nextStep() {


}

function grabSelected() {

}

function videoEnded() {
  vcontainer.nextVideo();
}