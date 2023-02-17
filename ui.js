class TestButton extends Widget {
  constructor(intf, x, y, w, h, name, callback) {
    super(intf, x, y, w, h, name, callback);
  }

  draw() {
    let p = this.intf.sketch;
    if (this.isFocused) {
      p.fill(0, 255, 0);
    } else {
      p.fill(255);
    }        
    p.rect(0, 0, this.width, this.height, 5);

    p.textAlign(p.CENTER, p.CENTER);
    p.fill(0);
    p.text("PLAY", 0, 0, this.width, this.height);
  }

  press() {
    this.callback();
  }
}