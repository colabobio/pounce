class Widget {
    constructor(intf, x=0, y=0, w=0, h=0, name=null, callback=null) {
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

    setParent(p) {
        this.parent = p;
        this.absX = p.absX + this.relX;
        this.absY = p.absY + this.relY;
    }

    setCallback(callback) {
        this.callback = callback;
    }

    addChildren(c) {
        this.children.push(c);
        c.setParent(this);
    }

    updateChildren() {
        for (let child of this.children) {
            child.setRelMousePos();
            child.setFocusedState();
            child.updateChildren();
        }
    }

    drawChildren() {
        let p = this.intf.sketch;
        for (let child of this.children) {
            if (!child.isVisible) continue;

            p.push();
            child.setOrigin();
            
            child.draw();
            
            this.intf.addDrawn(child);

            child.drawChildren();
            p.pop();
        }
    }

    setOrigin() {
        this.intf.sketch.translate(this.relX, this.relY);
    }

    setRelMousePos() {
        let p = this.intf.sketch;
        this.mouseX = p.mouseX - this.absX;
        this.mouseY = p.mouseY - this.absY;
        this.pmouseX = p.pmouseX - this.absX;
        this.pmouseY = p.pmouseY - this.absY;
    }

    setFocusedState() {
        this.isFocused = this === this.intf.focused;
    }

    hasFocus(mx, my) {
        return this.absX <= mx && mx <= this.absX + this.width &&
               this.absY <= my && my <= this.absY + this.height;
    }

    show() {
        this.isVisible = true;
        this.setVisible();
    }

    hide() {
        this.isVisible = false;
        this.setInvisible();
    }

    activate() {
        this.isActive = true;
        this.setActive();
    }

    deactivate() {
        this.isActive = false;
        this.setInactive();
    }

    setup() {}

    draw() {}

    press() {}

    hover() {}

    drag() {}

    release() {}

    lostFocus() {}

    setActive() {}

    setInactive() {}

    setVisible() {}

    setInvisible() {}
}
