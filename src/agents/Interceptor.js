import Agent from './Agent';
import Vector from '../math/Vector';

class Interceptor extends Agent {

    constructor(options) {
        super(
            {
                name: "Interceptor",
                color: "#FFFF00",
                ignoreBounds: false,
                maxPower: 1000, //2 + Math.random(),
                dragCoefficient: 5,
                frictionCoefficient: 5,
                area: .04,
                mass: 10, //kg
                size: 3,
                chaos:1000,
                ...options
            }
        );
        this.chasing = options.chasing;
    }

    tick = () => {

        const d = this.chasing.position.clone().subtract(this.position);
        d.add(d.clone().scale(-.3));
        const v = this.chasing.velocity.clone().subtract(this.velocity);

        let accel;
        if (d.magnitude() > 15) {
            accel = d.normalize().scale(this.maxPower);
        } else {
            accel = d.add(v).normalize().scale(this.maxPower);;
        }




/*
        const netClosingVelocity = this.velocity.clone().subtract(this.chasing.velocity);

        const brakingForceMagnitude = this.maxPower + this.dragForce.magnitude() + this.frictionForce.magnitude();
        const accelForceMagnitude = this.maxPower - this.dragForce.magnitude() - this.frictionForce.magnitude();
        const ab = brakingForceMagnitude / this.mass;
        const aa = accelForceMagnitude / this.mass;
        const dv = this.chasing.position.clone().subtract(this.position);

        let tAccelVec = netClosingVelocity.clone().multiply(netClosingVelocity).add(dv.clone().scale(2 * aa));
        tAccelVec = tAccelVec.sqrt().subtract(netClosingVelocity).scale(1/aa);
        const timeAccel = tAccelVec.magnitude();

        let tBrakeVec = netClosingVelocity.clone().multiply(netClosingVelocity).add(dv.clone().scale(2 * ab));
        tBrakeVec = tBrakeVec.sqrt().subtract(netClosingVelocity).scale(1/ab);
        const timeBrake = tBrakeVec.magnitude();

        let timeToCloseVelocityBraking = this.chasing.velocity.clone().subtract(this.velocity).magnitude() / timeBrake;
        let timeToCloseVelocityAccel= this.chasing.velocity.clone().subtract(this.velocity).magnitude() / timeAccel;

        console.log("am: " + accelForceMagnitude + " bm: " + brakingForceMagnitude + " tAccel: " + timeAccel + " tBrake: " + timeBrake + " tVelAccl: " + timeToCloseVelocityAccel + " tvelBrake: " + timeToCloseVelocityBraking);


        const headingSameDirection = Math.abs(this.chasing.velocity.angle() - this.velocity.angle()) <= (Math.PI / 2);
        const vAccel = headingSameDirection?aa:ab;
        let timeToMatchVelocity = this.chasing.velocity.clone().subtract(this.velocity).magnitude() / vAccel;
        console.log("Heading same direction: " + headingSameDirection + " time to get to velocity: " + timeToMatchVelocity);
    

        //console.log("eta: " + tAccelVec.magnitude());

        const estimatedChasingPosition = this.chasing.position.clone().add(this.chasing.velocity.clone().scale(timeAccel));
        const estimatedMyPosition = this.position.clone().add(this.velocity.clone().scale(timeAccel));

        const accelToCloseDistance = estimatedChasingPosition.subtract(estimatedMyPosition).scale(timeAccel !== 0?(2 / timeAccel * timeAccel):0);
        const accelToEqualVelociy = this.chasing.velocity.clone().subtract(this.velocity).scale(timeAccel !== 0?(1/timeAccel):0);
        const accel = accelToCloseDistance.add(accelToEqualVelociy);
        console.log("accel: " + accel.magnitude());



        // const accel = new Vector()
        //     .add(this.chasing.position)
        //     .add(new Vector().add(this.chasing.velocity).scale(.9))
        //     .subtract(this.position)
        //     .subtract(this.velocity);
 //           .normalize().scale(1000);

       //const sidewaysAccel = new Vector().add(accel).rotate(Math.PI / 2).scale(.2);
       //accel.add(sidewaysAccel);

       accel.scale(this.mass);
       accel.subtract(this.dragForce);
       accel.subtract(this.frictionForce);

        if (timeToMatchVelocity < timeBrake) {
            accel.normalize().scale(this.maxPower);
        }

//        const chaos = 5 * this.mass;
//        accel.add(new Vector(this.chaos - 2 * this.chaos * Math.random(), this.chaos - 2 * this.chaos * Math.random(), 0));
*/
        super.setForce(accel);
    }
}

export default Interceptor;
