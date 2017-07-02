import Agent from './Agent';
import Vector from '../math/Vector';

class Seeker extends Agent {

    constructor(state) {
        super(
            {
                name: "Seeker",
                color: "#8800FF",
                ignoreBounds: false,
                ...state,
            }
        );
        this.bouncer = state.bouncer;
    }

    update = () => {

        const distance = new Vector()
            .add(this.bouncer.position)
            .subtract(this.position);

        if (distance.magnitude() > 100) {
            this.acceleration = distance
                .normalize()
                .scale(.3);            
        } else {
            this.acceleration.scale(0);
        }

        if (this.velocity.magnitude() > 12) {
            this.velocity.normalize().scale(12);
        }
    }
}

export default Seeker;
