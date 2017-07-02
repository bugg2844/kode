class Agent {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.xvelocity = 1 + 15 * Math.random();
        this.yvelocity = 1 + 5 * Math.random();
        this.xdir = 1;
        this.ydir = 1;
        let c = Math.random();
        if (c < .33) {
           this.color = '#0000FF';
        } else if (c < .66) {
            this.color = '#00FF00';
        } else {
            this.color = '#FF0000';
        }
        this.color = '#8800FF';


    }

    tick = () => {
        if (this.x > 600) this.xdir = -1;
        else if (this.x < 0) this.xdir = 1;
        if (this.y > 600) this.ydir = -1;
        else if (this.y < 0) this.ydir = 1;
        this.x = this.x + this.xvelocity * this.xdir;
        this.y = this.y + this.yvelocity * this.ydir;
    }

}

export default Agent;