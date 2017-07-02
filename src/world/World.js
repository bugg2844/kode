class World {

    constructor(size) {
        this.size=size;
        this.agents=[];
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
