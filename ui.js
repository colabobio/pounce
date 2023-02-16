var TestButton = function(intf, x, y, w, h, name, callback) {
    Widget.call(this, intf, x, y, w, h, name, callback);
};

TestButton.prototype = Object.create(Widget.prototype);
Object.defineProperty(TestButton.prototype, 'constructor', { 
    value: TestButton, 
    enumerable: false,
    writable: true });

TestButton.prototype.draw = function() {
  let p = this.intf.sketch;
  if (this.isFocused) {
    p.fill(0, 255, 0);
  } else {
    p.fill(255);
  }  
  p.rect(0, 0, this.width, this.height, 5);
};