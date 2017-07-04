import Vector from '../math/Vector';
import ColoredSquarePainter from '../painters/ColoredSquarePainter';

class Agent {
    
    constructor(options) {
        
        options = {
            acceleration: new Vector(),
            velocity: new Vector(),
            position: new Vector(),
            size: 1,
            color: '#FFFFFF',
            name: "Agent",
            dragCoefficient: .5,
            area: .1 * .1, //1, //.1, //m2
            mass: 10, //kg
            power: 10, //kg * s * s
            painter: new ColoredSquarePainter(this),
            drawText: false,
            ...options
        };

        Object.assign(this,options);
    }

    getAccel = () => {
        return this.acceleration;
    }

    tick = () => {

        this.acceleration = this.getAccel();

        const velocityMagnitude = this.velocity.magnitude();
        const dragMagnitude = this.dragCoefficient * .5 * this.world.airDensity * velocityMagnitude * velocityMagnitude * this.area;
        this.drag = new Vector().add(this.velocity).normalize().scale(-dragMagnitude);
        this.acceleration = this.acceleration.normalize().scale(this.power / this.mass);
        this.acceleration.add(this.drag);
        if (this.drawText) {
            this.text = "" + Math.round(velocityMagnitude * 2.237) + " MPH" + ", drag: " + (Math.round(100 * dragMagnitude) / 100) + " kg * m/s2";
        }

        // Update physics
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        // Max bounds
        if (!this.ignoreBounds) {
            if (this.position.x >= this.world.size.width && this.velocity.x > 0) {
                this.velocity.x *= -1;
                this.position.x = this.world.size.width - 1;
            }
            else if (this.position.x < 0 && this.velocity.x < 0) {
                this.velocity.x *= -1;
                this.position.x = 0;
            }

            if (this.position.y >= this.world.size.height && this.velocity.y > 0) {
                this.velocity.y *= -1;
                this.position.y = this.world.size.height - 1;
            }
            else if (this.position.y < 0 && this.velocity.y < 0) {
                this.velocity.y *= -1;
                this.position.y = 0;
            }
        }
    }

}

export default Agent;