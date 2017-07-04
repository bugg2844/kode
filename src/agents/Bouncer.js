import Agent from './Agent';
import Vector from '../math/Vector';

class Bouncer extends Agent {

    constructor() {
        super(
            {
                name: "Bouncer",
                velocity: new Vector(
                    1 + 45 * Math.random(),
                    1 + 15 * Math.random(),
                    0),
                size: 5,
                color: '#8800FF'
            }
        );
    }
        
    getAccel = () => {
        return {
            vector: new Vector().add(this.velocity),
            power:1000
        }
    }

}

export default Bouncer;
