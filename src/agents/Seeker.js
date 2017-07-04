import Agent from './Agent';
import Vector from '../math/Vector';

class Seeker extends Agent {

    constructor(state) {
        super(
            {
                name: "Seeker",
                color: "#8800FF",
                ignoreBounds: false,
                maxPower: 1000, //2 + Math.random(),
                dragCoefficient: 5,
                frictionCoefficient: 5,
                area: .04,
                mass: 10, //kg
                ...state
            }
        );
        this.bouncer = state.bouncer;
    }

    getAccel = () => {

        const accel = new Vector()
            .add(this.bouncer.position)
            .subtract(this.position);

        const power = 1000; //4 * accel.magnitude() - 100;
        const chaos = 1.5;
        accel.normalize().add(new Vector(chaos - 2 * chaos * Math.random(), chaos - 2 * chaos * Math.random(), 0));

        return {
            vector: accel,
            power
        }
    }
}

export default Seeker;
