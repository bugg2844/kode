import World from './World';
import Bouncer from '../agents/Bouncer';
import Vector from '../math/Vector';

class BounceWorld extends World {

    constructor(options) {

        super(options);

        for (let i = 0; i < 1000; i++) {
           this.agents.push(
                new Bouncer({
                    name: "Bouncer " + i,
                    position: new Vector(20,20,0),
                    speed: 1 + 45 * Math.random()
                }));
        }
    }
}

export default BounceWorld;
