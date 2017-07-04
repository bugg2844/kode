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
                size: 5,
                color: '#FFFFFF',
                drawText: false,
                ...state
            }
        );
    }

    getAccel = () => {

        if (Math.random() < .01) {

            const speed = 100;

            if (Math.random() < .1) {
                this.velocity = new Vector(
                        speed * Math.random(),
                        speed * Math.random(),
                        0);
            }
            this.velocity.normalize().scale(speed * Math.random());
        }
        return {
            vector: new Vector(),
            power:0
        }
    }


}

export default ChaoticBouncer;
