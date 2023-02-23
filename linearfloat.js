class LinearFloat {
    constructor(v0) {
      this.duration = 2.0;

      this.value = v0;
      this.source = v0;
      this.target = v0;
      
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
            this.t = Date.now();
            let delta = (this.t - this.start) / 1000;
            let frac = delta / this.duration;
            this.value = (1 - frac) * this.source + frac * this.target;

            if (frac < 1) {
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
        this.start = Date.now();
    }
  
    incTarget(d) {
        this.targeting = true;
        this.target += d;    
    }
  
    getTarget() {
        return this.targeting ? this.target : this.value;
    }
}