import Vector from '../math/Vector';
import ColoredSquarePainter from '../painters/ColoredSquarePainter';

class Agent {
    
    constructor(options) {
        
        options = {
            accelForce: new Vector(),
            dragForce: new Vector(),
            frictionForce: new Vector(),
            acceleration: new Vector(),
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

    setForce(force) {
        this.accelForce = new Vector().add(force).limit(this.maxPower);
    }

    setVelocity(velocity) {
        this.velocity = velocity;
    }

    tick () {
    }



}

export default Agent;