import Vector from './Vector';

class Physics {

    constructor(world) {
        this.world = world;
    }


    calculateWorldForces(agent) {

        const velocityMagnitude = agent.velocity.magnitude();

        if (this.world.airDensity) {
            const dragForceMagnitude = agent.dragCoefficient * .5 * this.world.airDensity * velocityMagnitude * velocityMagnitude * agent.area;
            agent.dragForce = new Vector().add(agent.velocity).normalize().scale(-dragForceMagnitude);
        }

        if (this.world.gravity) {
            const frictionForceMagnitude = agent.frictionCoefficient * this.world.gravity;
            agent.frictionForce = new Vector().add(agent.velocity).normalize().scale(-frictionForceMagnitude);
        }


/*
        if (agent.drawText) {
           agent.text = 
            "P: " + Math.round(10 * this.position.x) / 10 + "," + Math.round(10 * this.position.y) / 10 + ", " +
           " A: " + (Math.round(100 * accelMagnitude * 2.237) / 100) + " MPH/s, " +
            "D: " + (Math.round(100 * dragAccelMagnitude * 2.237) / 100) + "  MPH/s, " +
            "F:" + (Math.round(100 * frictionAccelMagnitude * 2.237) / 100) + " MPH/s, " +
            "V: " + Math.round(velocityMagnitude * 2.237) + " MPH";
        }
        */
    }

    update(agent, elapsedSeconds) {

        if (elapsedSeconds > .25) {
            elapsedSeconds = .25;
        }

        const scaledAcceleration = new Vector().add(agent.acceleration).scale(elapsedSeconds);
        agent.velocity.add(scaledAcceleration);
        const scaledVelocity = new Vector().add(agent.velocity).scale(elapsedSeconds);
        agent.position.add(scaledVelocity);

        // Bounce off walls
        const maintainAccelOnBounce = false;
        if (!agent.ignoreBounds) {
            if (agent.position.x >= this.world.size.width && agent.velocity.x > 0) {
                agent.acceleration.x *= maintainAccelOnBounce?-1:0;
                agent.velocity.x *= -1;
                agent.position.x = this.world.size.width - 1;
                this.calculateWorldForces(agent);
            }
            else if (agent.position.x < 0 && agent.velocity.x < 0) {
                agent.acceleration.x *= maintainAccelOnBounce?-1:0;
                agent.velocity.x *= -1;
                agent.position.x = 0;
                this.calculateWorldForces(agent);
            }

            if (agent.position.y >= this.world.size.height && agent.velocity.y > 0) {
                agent.acceleration.y *= maintainAccelOnBounce?-1:0;
                agent.velocity.y *= -1;
                agent.position.y = this.world.size.height - 1;
                this.calculateWorldForces(agent);
            }
            else if (agent.position.y < 0 && agent.velocity.y < 0) {
                agent.acceleration.y *= maintainAccelOnBounce?-1:0;
                agent.velocity.y *= -1;
                agent.position.y = 0;
                this.calculateWorldForces(agent);
            }
        }
    }
}

export default Physics;
