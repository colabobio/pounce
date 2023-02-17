class TestButton extends Widget {
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
  
  draw() {
    let p = this.intf.sketch;

    this.intf.setFont("assets/Montserrat-Bold.ttf", 30); 
    p.fill("#D6D4D4");
    p.textAlign(p.RIGHT, p.CENTER);
    p.text("Dog behavior Video Annotation", 0, 0, this.width + 10, 100);

    let linex = this.leftMargin;
    let liney = 110;
    let linew = this.width - linex;
    let rad1 = 22;
    let rad2 = 10;

    stroke("#CBDF52");
    line(linex, liney, this.width, liney);
  
    fill("#CBDF52");
    noStroke();
    ellipse(linex, liney, rad1, rad1);
    ellipse(linex + 0.5 * linew, liney, rad1, rad1);
  
    ellipse(linex + 0.66 * linew, liney, rad2, rad2);
    ellipse(linex + 0.82 * linew, liney, rad2, rad2);
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
}

class SidePanel extends Widget {
  constructor(intf, x, y, w, h, name, callback) {
    super(intf, x, y, w, h, name, callback);
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
    p.text("Click the button when you see grab-bite behavior", 10, 10, this.width - 20, 0.2 * this.height);

    this.intf.setFont("assets/Montserrat-Bold.ttf", 10);
    p.text("Grab-bite:", 10, 0.3 * this.height, this.width - 20, 0.1 * this.height);

    this.intf.setFont("assets/Montserrat-Regular.ttf", 10);
    p.text("A snapping of the jaws closed around an object or pup. It can be let go immediately or held (including carrying)", 10, 0.45 * this.height, this.width - 20, 0.2 * this.height);
    
  }  
}