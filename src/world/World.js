class World {

    constructor(size) {
        this.size=size;
        this.agents=[];

        this.airDensity = 1.225; // kg/m3
    }

    tick = () => {

        for (const agent of this.agents) {
            agent.tick();
        }

    }


    addAgent = (agent) => {
        this.agents.push(agent);
        agent.world = this;
    }
}

export default World;
