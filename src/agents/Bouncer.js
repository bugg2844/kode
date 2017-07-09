import Agent from './Agent';
import Vector from '../math/Vector';

class Bouncer extends Agent {

    constructor(options) {
        super(
            {
                name: "Bouncer",
                speed: 45,
                size: 5,
                color: '#8800FF',
                ...options
            }
        );

        this.velocity = new Vector(Math.random(), Math.random(),0).normalize().scale(this.speed);
    }
        
    tick = () => {
        super.setVelocity(this.velocity.normalize().scale(this.speed));
    }

}

export default Bouncer;
