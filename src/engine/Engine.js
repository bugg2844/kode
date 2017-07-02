import WorldBuilder from '../world/WorldBuilder';

class Engine {

    constructor() {
        this.viewports = [];
        this.tickCount = 0;
        this.logTickCount();
        this.elapsed = 0;
        this.size = {
            width: 10,
            height: 10
        }
    }

    loadBounceWorld = () => {
        console.log("Starting new bounce world of " + this.size.width + "," + this.size.height);
        this.world = new WorldBuilder().bounceWorld(this.size);
    }
    loadChaseWorld = (size) => {
        this.world = new WorldBuilder().chaseWorld(this.size);
    }
    setSize = (size) => {
        this.size = size;
        if (this.world) {
            this.world.size = size;
        }
    }

    start = () => {
        this.tick();
    }

    registerViewport = (viewport) => {
        this.viewports.push(viewport);
    }

    tick = () => {

        this.tickCount++;

        this.world.tick();

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
