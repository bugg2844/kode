import Physics from '../math/Physics';

class World {

    constructor(size) {
        this.size=size;
        this.agents=[];

        this.airDensity = 1.225; // kg/m3
        this.gravity = 9.8;

        this.physics = new Physics(this);
    }

}

export default World;
