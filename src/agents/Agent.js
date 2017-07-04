import Vector from '../math/Vector';
import ColoredSquarePainter from '../painters/ColoredSquarePainter';

class Agent {
    
    constructor(options) {
        
        options = {
            velocity: new Vector(),
            position: new Vector(),
            size: 1,
            color: '#FFFFFF',
            name: "Agent",
            frictionCoefficient: .5,
            dragCoefficient: .5,
            area: .1,
            mass: 10, //kg
            maxPower: 10, //kg * s * s
            painter: new ColoredSquarePainter(this),
            drawText: false,
            ...options
        };

        Object.assign(this,options);
    }

    getAccel = () => {
        return {
            vector: new Vector(0,0,0),
            power: 0
        }
    }

    tick = (elapsedSeconds) => {

        let {vector: accelerationVector, power: accelerationPower} = this.getAccel();
        if (accelerationPower > this.maxPower) {
            accelerationPower = this.maxPower;
        } else if (accelerationPower < -this.maxPower) {
            accelerationPower = -this.maxPower;
        }
        
        const velocityMagnitude = this.velocity.magnitude();
        accelerationVector.normalize().scale(accelerationPower / this.mass);
        const accelMagnitude = accelerationVector.magnitude();

        let dragAccelMagnitude, frictionAccelMagnitude;
        if (this.world.airDensity) {
            const dragForceMagnitude = this.dragCoefficient * .5 * this.world.airDensity * velocityMagnitude * velocityMagnitude * this.area;
            dragAccelMagnitude = dragForceMagnitude / this.mass;
            const dragAccel = new Vector().add(this.velocity).normalize().scale(-dragAccelMagnitude);
            accelerationVector.add(dragAccel);
        }

        if (this.world.gravity) {
            const frictionForceMagnitude = this.frictionCoefficient * this.world.gravity;
            frictionAccelMagnitude = frictionForceMagnitude / this.mass;
            const frictionAccel = new Vector().add(this.velocity).normalize().scale(-frictionAccelMagnitude);
            accelerationVector.add(frictionAccel);
        }
        if (this.drawText) {
           this.text = 
            "P: " + Math.round(10 * this.position.x) / 10 + "," + Math.round(10 * this.position.y) / 10 + ", " +
           " A: " + (Math.round(100 * accelMagnitude * 2.237) / 100) + " MPH/s, " +
            "D: " + (Math.round(100 * dragAccelMagnitude * 2.237) / 100) + "  MPH/s, " +
            "F:" + (Math.round(100 * frictionAccelMagnitude * 2.237) / 100) + " MPH/s, " +
            "V: " + Math.round(velocityMagnitude * 2.237) + " MPH";
        }

        // Update physics
        this.velocity.add(accelerationVector.scale(elapsedSeconds));
        const elapsedVelocity = new Vector().add(this.velocity).scale(elapsedSeconds);
        this.position.add(elapsedVelocity);
        // this.velocity.add(this.acceleration.scale(1/60));
        // this.position.add(new Vector().add(this.velocity).scale(1/60));

        // Bounce off walls
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