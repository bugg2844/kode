import Agent from './Agent';
import Vector from '../math/Vector';

class ChaoticBouncer extends Agent {

    constructor(options) {
        super(
            {
                name: "ChaoticBouncer",
                size: 15,
                color: '#FFFFFF',
                drawText: false,
                speed: 100,
                ...options
            }
        );

        this.velocity = new Vector(
                    this.speed * Math.random(),
                    this.speed * Math.random(),
                    0);

    }

    tick = () => {

        const v = new Vector(1,0,0);
        v.rotate(Math.PI / 2);
        
        if (Math.random() < .01) {

            let velocity = new Vector().add(this.velocity);

            if (Math.random() < .1) {
                velocity = new Vector(
                        this.speed * Math.random(),
                        this.speed * Math.random(),
                        0);
            }
            super.setVelocity(velocity.normalize().scale(this.speed * Math.random()));
        }
    }


}

export default ChaoticBouncer;
