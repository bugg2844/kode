import World from './World';
import Bouncer from '../agents/Bouncer';
import ChaoticBouncer from '../agents/ChaoticBouncer';
import Seeker from '../agents/Seeker';
import Vector from '../math/Vector'

class WorldBuilder {

    bounceWorld = (size) => {
        const world = new World(size);
        for (let i = 0; i < 1000; i++) {
            world.addAgent(
                new Bouncer({
                    name: "Bouncer " + i,
                    position: new Vector(20,20,0),
                    size: 5
                }));
        }
        return world;
    }

    chaseWorld = (size) => {
        const world = new World(size);
        const bouncer = 
            new ChaoticBouncer({
                name: "Bouncer 1",
                position: new Vector(20,20,0),
                size: 5//1 + 10.0  * Math.random()
            });
        world.addAgent(bouncer);

        for (let i = 0; i < 1000; i++) {
            world.addAgent(
                new Seeker({
                    name: "Seeker " + i,
                    position: new Vector(
                        world.size.width * Math.random(),
                        world.size.height * Math.random(),
                        0),
                    size: 2,
                    bouncer: bouncer
                }));
        }
        //world.agents[999].drawText = true;
        return world;
    }


}

export default WorldBuilder;
