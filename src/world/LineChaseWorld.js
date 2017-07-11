import World from './World';
import Bouncer from '../agents/Bouncer';
import Seeker from '../agents/Seeker';
import Interceptor from '../agents/Interceptor';
import Vector from '../math/Vector';

class LineChaseWorld extends World {

    constructor(options) {

        super(options);

        const bouncer = 
            new Bouncer({
                name: "Bouncer 1",
                position: new Vector(20,20,0),
                speed:15
            });
        this.agents.push(bouncer);

        for (let i = 1; i <= 400; i++) { // 400
            this.agents.push(
                new Interceptor({
                    name: "Interceptor " + i,
                    position: new Vector(
                        this.size.width * Math.random(),
                        this.size.height * Math.random(),
                        0),
                    chasing: i===0?bouncer:this.agents[i-1],
                    color: (i%2 ==0)?"#FF0000":"#FFFF00",
                    chaos:0,
                    maxPower:100
                }));
        }
    }d
}

export default LineChaseWorld;
