import World from './World';
import Bouncer from '../agents/Bouncer';
import ChaoticBouncer from '../agents/ChaoticBouncer';
import Seeker from '../agents/Seeker';
import Vector from '../math/Vector'

class WorldBuilder {

    bounceWorld = (size) => {
        const world = new World(size);
        for (let i = 0; i < 1000; i++) {
            world.agents.push(
                new Bouncer({
                    name: "Bouncer " + i,
                    position: new Vector(20,20,0)
                }));
        }
        return world;
    }

    chaseWorld = (size) => {
        const world = new World(size);
        const bouncer = 
            new ChaoticBouncer({
                name: "Bouncer 1",
                position: new Vector(20,20,0)
            });
        world.agents.push(bouncer);

        for (let i = 0; i < 400; i++) {
            world.agents.push(
                new Seeker({
                    name: "Seeker " + i,
                    position: new Vector(
                        world.size.width * Math.random(),
                        world.size.height * Math.random(),
                        0),
                    bouncer: bouncer
                }));
        }
        //world.agents[999].drawText = true;
        return world;
    }


}

export default WorldBuilder;
