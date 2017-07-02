import Vector from '../math/Vector';

class Agent {
    
    constructor(state) {

        this.state = {
            acceleration: new Vector(),
            velocity: new Vector(),
            position: new Vector(),
            size: 1,
            color: '#FFFFFF',
            name: "Agent",
            ...state
        }

        this.acceleration = this.state.acceleration;
        this.velocity = this.state.velocity;
        this.position = this.state.position;
        this.size = this.state.size;
        this.color = this.state.color;
        this.name = this.state.name;
    }

    update = () => {

    }

    tick = () => {

        this.update();
        
        // Update physics
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        // Max bounds
        if (!this.state.ignoreBounds) {
            if (this.position.x >= this.world.size.width && this.velocity.x > 0) {
                this.velocity.x *= -1;
                this.position.x = this.world.size.width - 1;
            }
            else if (this.position.x < 0 && this.velocity.x < 0) {
                this.velocity.x *= -1;
                this.position.x = 0;
            }

            if (this.position.y >= this.world.size.height && this.velocity.y > 0) {
                this.velocity.y *= -1;
                this.position.y = this.world.size.height - 1;
            }
            else if (this.position.y < 0 && this.velocity.y < 0) {
                this.velocity.y *= -1;
                this.position.y = 0;
            }
        }
    }

}

export default Agent;