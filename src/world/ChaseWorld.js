import World from './World';
import ChaoticBouncer from '../agents/ChaoticBouncer';
import Seeker from '../agents/Seeker';
import Vector from '../math/Vector';

class ChaseWorld extends World {

    constructor(options) {

        super(options);
        
        const bouncer = 
            new ChaoticBouncer({
                name: "Bouncer 1",
                position: new Vector(20,20,0)
            });
        this.agents.push(bouncer);

        for (let i = 0; i < 400; i++) {
            this.agents.push(
                new Seeker({
                    name: "Seeker " + i,
                    position: new Vector(
                        this.size.width * Math.random(),
                        this.size.height * Math.random(),
                        0),
                    chasing: bouncer
                }));
        }
    }
}

export default ChaseWorld;
