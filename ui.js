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

    p.textAlign(p.CENTER, p.CENTER);
    p.noStroke();
    p.fill("#D9D7D7");
    p.text(this.label, 0, 0, this.width, this.height);
  }

  press() {
    this.callback();
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
    p.text("Click the button when you see grab-bite behavior", 10, 10, this.width - 20, this.height/2);    
    
  }  
}