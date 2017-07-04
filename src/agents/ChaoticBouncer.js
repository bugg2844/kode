import Agent from './Agent';
import Vector from '../math/Vector';

class ChaoticBouncer extends Agent {

    constructor(state) {
        super(
            {
                name: "ChaoticBouncer",
                velocity: new Vector(
                    1 + 25 * Math.random(),
                    1 + 25 * Math.random(),
                    0),
                size: 5,
                color: '#FFFFFF',
                drawText: true,
                ...state
            }
        );
    }

    getAccel = () => {
        if (Math.random() < .02) {
            this.velocity.normalize().scale(1 + 25 * Math.random());
        }
        return new Vector();
    }


}

export default ChaoticBouncer;
