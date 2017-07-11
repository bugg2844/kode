import Agent from './Agent';
import Vector from '../math/Vector';

class Seeker extends Agent {

    constructor(options) {
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
                chaos:700,
                ...options
            }
        );
        this.chasing = options.chasing;
    }

    tick = () => {

        const accel = new Vector()
            .add(this.chasing.position)
            .add(new Vector().add(this.chasing.velocity).scale(.9))
            .subtract(this.position)
            .subtract(this.velocity);
 //           .normalize().scale(1000);

       //const sidewaysAccel = new Vector().add(accel).rotate(Math.PI / 2).scale(.2);
       //accel.add(sidewaysAccel);

       accel.scale(this.mass);
       accel.subtract(this.dragForce);
       accel.subtract(this.frictionForce);

//        const chaos = 5 * this.mass;
        accel.add(new Vector(this.chaos - 2 * this.chaos * Math.random(), this.chaos - 2 * this.chaos * Math.random(), 0));

        super.setForce(accel);
    }
}

export default Seeker;
