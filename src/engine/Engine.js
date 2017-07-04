import WorldBuilder from '../world/WorldBuilder';

class Engine {

    constructor() {
        this.viewports = [];
        this.tickCount = 0;
        this.logTickCount();
        this.elapsed = 0;
        this.worldSize = {
            width: 100,
            height: 100
        }
    }

    loadBounceWorld = () => {
        console.log("Starting new bounce world of " + this.worldSize.width + "," + this.worldSize.height);
        this.world = new WorldBuilder().bounceWorld(this.worldSize);
    }
    loadChaseWorld = (size) => {
        this.world = new WorldBuilder().chaseWorld(this.worldSize);
    }

    start = () => {
        this.lastTick = Date.now();
        this.tick();
    }

    registerViewport = (viewport) => {
        this.viewports.push(viewport);
    }

    tick = () => {

        const now = Date.now();
        const elapsedSeconds = (now - this.lastTick) / 1000;
        this.lastTick = now;

        this.tickCount++;

        this.world.tick(elapsedSeconds);

        for (const viewport of this.viewports) {
            viewport.paint();
        }
        requestAnimationFrame(this.tick);
    }

    logTickCount = () => {
        console.log(this.tickCount + " fps");
        this.tickCount = 0;
        setTimeout(this.logTickCount, 1000);
    }
}

export default Engine;
