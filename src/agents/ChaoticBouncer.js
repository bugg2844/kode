import Agent from './Agent';
import Vector from '../math/Vector';

class ChaoticBouncer extends Agent {

    constructor(state) {
        super(
            {
                name: "ChaoticBouncer",
                velocity: new Vector(
                    25 + 75 * Math.random(),
                    25 + 75 * Math.random(),
                    0),
                size: 15,
                color: '#FFFFFF',
                drawText: false,
                ...state
            }
        );
    }

    tick = () => {

        const v = new Vector(1,0,0);
        v.rotate(Math.PI / 2);
        
        if (Math.random() < .01) {

            const speed = 100;
            let velocity = new Vector().add(this.velocity);

            if (Math.random() < .1) {
                velocity = new Vector(
                        speed * Math.random(),
                        speed * Math.random(),
                        0);
            }
            super.setVelocity(velocity.normalize().scale(speed * Math.random()));
        }
    }


}

export default ChaoticBouncer;
