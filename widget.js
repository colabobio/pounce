var Widget = function(intf, x=0, y=0, w=0, h=0, name=null, callback=null) {
    this.intf = intf;

    this.relX = intf.scaleFactor * x;
    this.relY = intf.scaleFactor * y;

    this.absX = intf.scaleFactor * x;
    this.absY = intf.scaleFactor * y;

    this.width = intf.scaleFactor * w;
    this.height = intf.scaleFactor * h;

    this.mouseX = 0;
    this.mouseY = 0;
    this.pmouseX = 0;
    this.pmouseY = 0;

    this.isFocused = false;
    this.parent = null;
    this.children = [];

    this.isActive = true;
    this.isVisible = true;

    this.name = name;
    this.callback = callback;
}

Widget.prototype = {

    setParent: function(p) {
        this.parent = p;
        this.absX = p.absX + this.relX;
        this.absY = p.absY + this.relY;
    },

    setCallback: function(callback) {
        this.callback = callback;
    },

    addChildren: function(c) {
        this.children.push(c);
        c.setParent(this);
    },

    updateChildren: function() {
        for (child of this.children) {
            child.setRelMousePos();
            child.setFocusedState();
            child.updateChildren();
        }
    },

    drawChildren: function() {
        let p = this.intf.sketch;
        for (child of this.children) {
            if (!child.isVisible) continue;

            p.push();
            child.setOrigin();
            
            child.draw();
            
            this.intf.addDrawn(child);

            child.drawChildren();
            p.pop();
        }
    },

    setOrigin: function() {
        this.intf.sketch.translate(this.relX, this.relY);
    },
        
    setRelMousePos: function() {
        let p = this.intf.sketch;
        this.mouseX = p.mouseX - this.absX;
        this.mouseY = p.mouseY - this.absY;
        this.pmouseX = p.pmouseX - this.absX;
        this.pmouseY = p.pmouseY - this.absY;
    },

    setFocusedState: function() {
        this.isFocused = this === this.intf.focused;
    },
        
    hasFocus: function(mx, my) {
        return this.absX <= mx && mx <= this.absX + this.width &&
               this.absY <= my && my <= this.absY + this.height;
    },

    show: function() {
        this.isVisible = true;
        this.setVisible();
    },

    hide: function() {
        this.isVisible = false;
        this.setInvisible();
    },

    activate: function() {
        this.isActive = true;
        this.setActive();
    },

    deactivate: function() {
        this.isActive = false;
        this.setInactive();
    },

    setup: function() {},

    draw: function() {},

    press: function() {},

    hover: function() {},

    drag: function() {},

    release: function() {},

    lostFocus: function() {},

    setActive: function() {},

    setInactive: function() {},

    setVisible: function() {},

    setInvisible: function() {},

};