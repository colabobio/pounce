class SoftFloat {
    constructor(v0) {
        this.attraction = 0.1;
        this.damping = 0.2;
    
        this.value = v0;
        this.source = v0;
        this.target = v0;
    
        this.velocity = 0;
        this.acceleration = 0;
    
        this.enabled = true;  
        this.targeting = false;
    }

    getInt() {
        return  Math.floor(this.value);
    }

    set(v) {
        this.value = v;
        this.source = v;
        this.target = v;
        this.targeting = false;
    }

    get() {
        return this.value;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    update() {
        if (!this.enabled) return false;

        if (this.targeting) {
            this.acceleration += this.attraction * (this.target - this.value);
            this.velocity = (this.velocity + this.acceleration) * this.damping;
            this.value += this.velocity;
            this.acceleration = 0;
            if (Math.abs(this.velocity) > 0.0001 && Math.abs(this.target - this.value) >= 0) {
                return true;
            }
            // arrived, set it to the target value to prevent rounding error
            this.value = this.target;
            this.targeting = false;
        }

        return false;
    }

    fraction() {
        return this.value / this.target;
    }

    setTarget(t) {
        this.targeting = true;
        this.target = t;
        this.source = this.value;
    }
  
    incTarget(d) {
        this.targeting = true;
        this.target += d;    
    }
  
    getTarget() {
        return this.targeting ? this.target : this.value;
    }  
}