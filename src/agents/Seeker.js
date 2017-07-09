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
                size: 3,
                ...state
            }
        );
        this.bouncer = state.bouncer;
    }

    tick = () => {

        const accel = new Vector()
            .add(this.bouncer.position)
//            .add(this.bouncer.velocity)
            .subtract(this.position)
 //           .subtract(this.velocity)
            .normalize().scale(1000);

       //const sidewaysAccel = new Vector().add(accel).rotate(Math.PI / 2).scale(.2);
       //accel.add(sidewaysAccel);

       // accel.scale(this.mass);
       // accel.subtract(this.dragForce);
       // accel.subtract(this.frictionForce);

//        const chaos = 5 * this.mass;
        const chaos = 1000;
        accel.add(new Vector(chaos - 2 * chaos * Math.random(), chaos - 2 * chaos * Math.random(), 0));

        super.setForce(accel);
    }
}

export default Seeker;
