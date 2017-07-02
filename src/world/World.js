class World {

    constructor(width, height) {
        this.size={width,height};
        this.agents=[];
        this.viewports = [];
        this.tickCount = 0;
        this.logTickCount();
        this.elapsed = 0;
    }

    registerViewport = (viewport) => {
        this.viewports.push(viewport);
    }

    tick = () => {

        this.tickCount++;

        for (const agent of this.agents) {
            agent.tick();
        }
        for (const viewport of this.viewports) {
            viewport.paint();
        }
    }

    logTickCount = () => {
        //console.log(this.tickCount + " fps");
        this.tickCount = 0;
        setTimeout(this.logTickCount, 1000);
    }

    addAgent = (agent) => {
        this.agents.push(agent);
    }
}

export default World;
