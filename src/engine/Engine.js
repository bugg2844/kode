import WorldBuilder from '../world/WorldBuilder';
import Vector from '../math/Vector';

class Engine {

    constructor() {
        this.viewports = [];
        this.tickCount = 0;
        this.logRedrawCount();
        this.elapsed = 0;
        this.worldSize = {
            width: 100,
            height: 100
        }
        this.numAgentActionGroups = 1; //0;
        this.timeBetweenAction=.0001;

        this.numAgentActionGroups = 4; //0;
        this.timeBetweenAction=.025;

        this.currentAgentActionGroup = 0;
    }

    loadBounceWorld = () => {
        console.log("Starting new bounce world of " + this.worldSize.width + "," + this.worldSize.height);
        this.world = new WorldBuilder().bounceWorld(this.worldSize);
    }
    loadChaseWorld = (size) => {
        this.world = new WorldBuilder().chaseWorld(this.worldSize);
    }

    start = () => {
        this.lastRedraw = Date.now();
        this.lastForceCalculation = Date.now();
        this.lastAgentAction = Date.now();
        this.tick();
    }

    registerViewport = (viewport) => {
        this.viewports.push(viewport);
    }

    tick = () => {

        const now = Date.now();
        const elapsedSecondsSinceLastRedraw = (now - this.lastRedraw) / 1000;
        this.lastRedraw = now;

        const elapsedSecondsSinceLastTick = (now - this.lastAgentAction) / 1000;
        let shouldAct = false;
        if (elapsedSecondsSinceLastTick > this.timeBetweenAction / this.numAgentActionGroups) {
            shouldAct = true;
            this.lastAgentAction = now;
            this.currentAgentActionGroup++;
            if (this.currentAgentActionGroup >= this.numAgentActionGroups) {
                this.currentAgentActionGroup = 0;
            }
           // console.log("Group " + this.currentAgentActionGroup + " acting.");
        }

        const elapsedSecondsSinceForceCalculation = (now - this.lastForceCalculation) / 1000;
        let shouldCalculateForces = false;
        if (shouldAct || elapsedSecondsSinceForceCalculation > .2) {
            shouldCalculateForces = true;
            this.lastForceCalculation = now;
        }

        this.redrawCount++;

        let agentNumber = 0;
        for (const agent of this.world.agents) {
            agentNumber++;
            if (shouldAct) {
                if ((agentNumber % this.numAgentActionGroups) === this.currentAgentActionGroup) {
                    this.world.physics.calculateWorldForces(agent);
                    agent.tick();
                    const accelForce = new Vector().add(agent.accelForce);
                    accelForce.add(agent.dragForce);
                    accelForce.add(agent.frictionForce);
                    agent.acceleration = accelForce.scale(1/agent.mass);
                }
            } 
            // if (shouldCalculateForces) {
            //     this.world.physics.calculateAcceleration(agent);
            // }
            this.world.physics.update(agent,elapsedSecondsSinceLastRedraw);
        }

        for (const viewport of this.viewports) {
            viewport.paint();
        }
        requestAnimationFrame(this.tick);
    }

    logRedrawCount = () => {
        console.log(this.redrawCount + " fps");
        this.redrawCount = 0;
        setTimeout(this.logRedrawCount, 1000);
    }
}

export default Engine;
