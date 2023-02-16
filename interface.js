var Interface = function(sketch, scale=1) {
    this.sketch = sketch;    
    this.scaleFactor = scale;
    this.focused = null;
    this.drawn = [];
    this.fonts = {};
    this.widgets = {};
    this.root = new Widget(this);
};

Interface.prototype = {

    addWidget: function(w, parent=null, parentName=null) {
        if (parent) {
            parent.addChildren(w);
        } else {
            if (parentName) {
                namedParent = this.getWidget(parentName);
                if (namedParent) {
                    namedParent.addChildren(w);
                }
            } else {
                this.root.addChildren(w);
            }
        }
        if (w.name) {
            this.widgets[w.name] = w;
        }
        
        w.setup();
    },

    getWidget: function(name) {
        if (name in this.widgets) {
            return this.widgets[name];
        } else {
            return null;
        }            
    },

    addFont: function(name, size) {
        font = this.sketch.loadFont(name, this.scaleFactor * size);
        this.fonts[name + size.toString()] = font;
    },

    setFont: function(name, size) {
        let key = name + size.toString();
        if (key in this.fonts) {
            font = this.fonts[key];
            this.sketch.textFont(font);        
        }
    },

    update: function() {
        this.root.updateChildren();
        this.drawn = [];
        this.root.drawChildren();
    },

    addDrawn: function(w) {
        this.drawn.push(w);
    },

    mousePressed: function() {
        this.setFocused(this.sketch.mouseX, this.sketch.mouseY);
        if (this.focused) {
            this.focused.setRelMousePos();
            this.focused.press();
        }
    },
            
    mouseMoved: function() {
        this.setFocused(this.sketch.mouseX, this.sketch.mouseY);
        if (this.focused) {
            this.focused.setRelMousePos();
            this.focused.hover();
        }
    },

    mouseDragged: function() {
        this.setFocused(this.sketch.mouseX, this.sketch.mouseY);
        if (this.focused) {
            this.focused.setRelMousePos();
            this.focused.drag();
        }        
    },

    mouseReleased: function() {
        this.setFocused(this.sketch.mouseX, this.sketch.mouseY);
        if (this.focused) {
            this.focused.setRelMousePos();
            this.focused.release();
        } 
    },

    setFocused: function(mx, my) {
        var pfocused = this.focused;
        this.focused = null;
        for (var i = this.drawn.length - 1; i >= 0; i--) {
            let child = this.drawn[i];            
            if (child.isVisible && child.isActive && child.hasFocus(mx, my)) {
                if (pfocused && pfocused !== child) {
                    pfocused.lostFocus();
                }
                this.focused = child;                
                return
            }
        }
        if (pfocused) {
            pfocused.lostFocus();
        }     
    },

};