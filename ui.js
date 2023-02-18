class Button extends Widget {
  constructor(intf, x, y, w, h, name, callback, label="") {
    super(intf, x, y, w, h, name, callback);
    this.label = label;
  }

  draw() {
    let p = this.intf.sketch;
    // if (this.isFocused) {
    //   p.fill(0, 255, 0);
    // } else {
    //   p.fill(255);
    // } 
    p.noFill();
    p.stroke("#D9D7D7");
    p.rect(0, 0, this.width, this.height, 5);

    this.intf.setFont("assets/Montserrat-Regular.ttf", 15);
    p.textAlign(p.CENTER, p.CENTER);
    p.noStroke();
    p.fill("#D9D7D7");
    p.text(this.label, 0, 0, this.width, this.height);
  }

  press() {
    this.callback();
  }
}

class NextButton extends Widget {
  constructor(intf, x, y, w, h, name, callback) {
    super(intf, x, y, w, h, name, callback);
  }

  draw() {
    let p = this.intf.sketch;
    
    p.noFill();    
    p.stroke("#D9D7D7");
    p.strokeWeight(3);
    p.strokeCap(p.ROUND);
    p.line(0, 0.4 * this.height, this.width, 0.4 * this.height);
    p.line(0.7 * this.width, 0, this.width, 0.4 * this.height);
    p.line(0.7 * this.width, 0.8 * this.height, this.width, 0.4 * this.height);

    this.intf.setFont("assets/Montserrat-Regular.ttf", 15);
    p.textAlign(p.CENTER, p.CENTER);
    p.noStroke();
    p.fill("#D9D7D7");
    p.text("Next", 0, 0.8 * this.height, this.width, 0.4 * this.height);
  }

  press() {
    this.callback();
  }
}

class Header extends Widget {
  constructor(intf, x, y, w, h, name, lmargin) {
    super(intf, x, y, w, h, name);
    this.leftMargin = lmargin;    
  }
  
  setup() {
    this.stage = 1;
    this.stageX = this.leftMargin;
    this.gray = "#D6D4D4"; 
    this.green = "#CBDF52";
  }

  draw() {
    let p = this.intf.sketch;

    this.intf.setFont("assets/Montserrat-Bold.ttf", 30); 
    p.fill(this.gray);
    p.textAlign(p.RIGHT, p.CENTER);
    p.text("Dog behavior Video Annotation", 0, 0, this.width + 10, 100);

    let linex = this.leftMargin;
    let linew = this.width - linex;
    let liney = 110;    
    let rad1 = 22;
    let rad2 = 10;
    
    p.stroke(this.gray);    
    line(linex, liney, this.width, liney);

    stroke(this.green);
    let x = this.stageX;
    line(linex, liney, x, liney);
  
    noStroke();
    fill(this.green);
    ellipse(linex, liney, rad1, rad1);

    if (1 < this.stage) fill(this.green);
    else fill(this.gray);
    ellipse(linex + 0.5 * linew, liney, rad1, rad1);
  
    if (2 < this.stage) fill(this.green);
    else fill(this.gray);
    ellipse(linex + 0.66 * linew, liney, rad2, rad2);

    if (3 < this.stage) fill(this.green);
    else fill(this.gray);
    ellipse(linex + 0.82 * linew, liney, rad2, rad2);

    if (4 < this.stage) fill(this.green);
    else fill(this.gray);
    ellipse(linex + 1.00 * linew, liney, rad2, rad2);
    
    this.intf.setFont("assets/Montserrat-Regular.ttf", 15);
    p.fill("#D6D4D4");

    p.textAlign(p.LEFT, p.CENTER);
    text("Training", linex, liney + 15, 30, 30);
    text("Analyzing", linex + 0.5 * linew, liney + 15, 30, 30);
    text("1", linex + 0.66 * linew, liney + 15, 30, 30);
    text("2", linex + 0.82 * linew, liney + 15, 30, 30);
    text("3", linex + 1.00 * linew, liney + 15, 30, 30);

  }

  nextStage() {
    this.stage++;
    let linex = this.leftMargin;
    let linew = this.width - linex;

    if (this.stage == 2) {
      this.stageX = linex + 0.5 * linew;
    } else if (this.stage == 3) {
      this.stageX = linex + 0.66 * linew;
    } else if (this.stage == 4) {
      this.stageX = linex + 0.82 * linew;
    } else if (this.stage == 5) {
      this.stageX = linex + 1.00 * linew;
    }
  }
}

class SidePanel extends Widget {
  setup() {
    this.stage = 1;
  }

  draw() {
    let p = this.intf.sketch;
    p.noFill();
    p.stroke("#D9D7D7");
    p.rect(0, 0, this.width, this.height, 5);

    p.textAlign(p.CENTER, p.CENTER);
    p.noStroke();
    p.fill("#D9D7D7");

    this.intf.setFont("assets/Montserrat-SemiBold.ttf", 15);
    if (this.stage == 1) {
      p.text("Play the tutorial video to learn how to annotate the behaviors", 10, 10, this.width - 20, 0.2 * this.height);
    } else if (this.stage == 2) {
      p.text("Go to the next video to annotate the behaviors", 10, 10, this.width - 20, 0.2 * this.height);
    } else if (this.stage == 3) {
      this.intf.setFont("assets/Montserrat-SemiBold.ttf", 15);
      p.text("Play the video and click the button when you see grab-bite behavior", 10, 10, this.width - 20, 0.2 * this.height);
    } else if (this.stage == 4) {
      p.fill("#CBDF52");
      p.text("Congratulations, you completed the training and annotation tasks!", 10, 10, this.width - 20, 0.2 * this.height);      
    }

    p.fill("#D9D7D7");
    this.intf.setFont("assets/Montserrat-Bold.ttf", 10);
    p.text("Grab-bite:", 10, 0.3 * this.height, this.width - 20, 0.1 * this.height);

    this.intf.setFont("assets/Montserrat-Regular.ttf", 10);
    p.text("A snapping of the jaws closed around an object or pup. It can be let go immediately or held (including carrying)", 10, 0.45 * this.height, this.width - 20, 0.2 * this.height);
    
  }

  showIntroText() {
    this.stage = 1;
  }

  showNextText() {
    this.stage = 2;
  } 

  showActionText() {
    this.stage = 3;
  }

  showCongratulations() {
    this.stage = 4
  }  
}

class VideoContainer extends Widget {
  constructor(intf, x, y, w, h, name, callback, videos, startImages, endImages) {
    super(intf, x, y, w, h, name, callback);
    this.videos = videos;    
    this.startImages = startImages;
    this.endImages = endImages;
  }

  setup() {
    this.playing = false;
    this.showFirstFrame = true;
    this.showLastFrame = false;
    this.idx = 0;
  }

  draw() {
    let p = this.intf.sketch;

    let w = this.width;
    let h = this.height;

    if (this.showFirstFrame) {
      p.image(this.startImages[this.idx], 40, 0, 640, 360);
    } else if (this.showLastFrame) {
      p.image(this.endImages[this.idx], 40, 0, 640, 360);
    } else {
      let vid = this.videos[this.idx];
      vid.size(640, 360); 
      p.image(vid, 40, 0, 640, 360);
    }

    if (this.playing) {
      p.fill(0);
      p.ellipse(40 + w/2, h/2, 50, 50);      
      p.fill("#D9D7D7");
      p.rect(40+w/2 - 10, h/2 - 15, 5, 15);
      p.rect(40+w/2 + 10, h/2 - 15, 5, 15);
    } else if (!this.showLastFrame) {
      p.fill(0);
      p.ellipse(40 + w/2, h/2, 50, 50); 
      p.fill("#D9D7D7");
      p.triangle(40+w/2 - 10, h/2 - 10, 40+w/2 + 10, h/2, 40+w/2 - 10, h/2 + 10);
    }
  }

  press() {
    if (this.showLastFrame) return;

    let vid = this.videos[this.idx];

    if (this.playing) {
      vid.pause();
    } else {
      vid.play();
    }

    this.playing = !this.playing;
    this.showFirstFrame = false;
    this.showLastFrame = false;
  }

  nextVideo() {
    if (this.idx < 3) {
      this.idx++;
      print("video ended", this.idx);
    } 
  }

  firstFrame() {
    this.showFirstFrame = true;
    this.showLastFrame = false;
    this.playing = false;
  }  

  lastFrame() {
    this.showLastFrame = true;
    this.showFirstFrame = false;
    this.playing = false;
  }
}