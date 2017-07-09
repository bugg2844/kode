import Physics from '../math/Physics';

class World {

    constructor(options) {

        Object.assign(this, {
            size: {
                width: 100,
                height: 100
            },
            agents: [],
            airDensity: 1.225,
            gravity: 9.8,
            physics: new Physics(this),
            options
        });
    }
}

export default World;
