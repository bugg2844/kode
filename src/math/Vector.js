class Vector {

    constructor(x=0, y=0, z=0) {
        if (typeof x == 'number') {
            this.x = x;
            this.y = y;
            this.z = z;
        } else {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        }
    }

    clone = () => {
        return new Vector(this);    
    }

    add = (v) => {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subtract = (v) => {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    multiply = (v) => {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }

    sqrt = () => {
        const magnitude = this.magnitude();
        const scale = (magnitude !== 0?Math.sqrt(magnitude)/magnitude:1);
        return this.scale(scale);
    }

    magnitude = () => {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    angle = () => {
        if (this.y !== 0) {
            return (Math.atan(this.x/this.y) + (this.y > 0?0:Math.PI));
        } else if (this.x >= 0) {
            return 0;
        } else {
            return Math.PI;
        }
    }

    rotate = (radians) => {
        const cs = Math.cos(radians);
        const sn = Math.sin(radians);

        const x = this.x * cs - this.y * sn;
        this.y = this.x * sn + this.y * cs;
        this.x = x;

        return this;
    }

    normalize = () => {
        const magnitude = this.magnitude();
        if (magnitude !== 0) {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
        }
        return this;
    }

    scale = (s) => {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    limit = (limit) => {
        const magnitude = this.magnitude();
        if (magnitude > limit) {
            this.scale(limit/magnitude);
        }
        return this;
    }

}

/*export right = new Vector(1,0,0);
export left = new Vector(-1,0,0);
export up = new Vector(0,1,0);
export down = new Vector(0,-1,0);
export forward = new Vector(0,0,1);
export back = new Vector(0,0,-1);
*/

Vector.zero = new Vector(0,0,0);

export default Vector;