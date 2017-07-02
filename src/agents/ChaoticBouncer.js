import Agent from './Agent';
import Vector from '../math/Vector';

class ChaoticBouncer extends Agent {

    constructor(state) {
        super(
            {
                name: "ChaoticBouncer",
                velocity: new Vector(
                    1 + 15 * Math.random(),
                    1 + 5 * Math.random(),
                    0),
                size: 5,
                color: '#FFFFFF',
                ...state
            }
        );
    }

    update = () => {
        if (Math.random() < .01) {
            this.velocity.normalize().scale(1 + 15 * Math.random());
        }
    }


}

export default ChaoticBouncer;
