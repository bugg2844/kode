import Agent from './Agent';
import Vector from '../math/Vector';

class Seeker extends Agent {

    constructor(state) {
        super(
            {
                name: "Seeker",
                color: "#8800FF",
                ignoreBounds: false,
                power:2 + Math.random(),
                ...state,
            }
        );
        this.bouncer = state.bouncer;
    }

    getAccel = () => {

        const accel = new Vector()
            .add(this.bouncer.position)
            .subtract(this.position).normalize().scale(180);

        // if (accel.magnitude() < 100) {
        //     accel.scale(0);
        // }

        accel.add(new Vector(500 * Math.random() - 250, 500 * Math.random() - 250, 0));

        return accel;
    }
}

export default Seeker;
