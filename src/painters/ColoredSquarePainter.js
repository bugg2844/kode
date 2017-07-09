class ColoredSquarePainter {

    constructor(agent) {
        this.agent = agent;
    }

    paint = (context, scale, viewportSize, group) => {
//        context.fillStyle = "#88" + group + "0" + group + "F"; // this.agent.color;
        context.fillStyle = this.agent.color;
        let offset = -this.agent.size / 2;
//        context.save();
        context.translate(this.agent.position.x * scale.x,viewportSize.height - this.agent.position.y * scale.y);
        context.fillRect(offset, offset, this.agent.size, this.agent.size);
  //      context.restore();
        // context.fillStyle = "#ffff00";

        // const predictedX = this.agent.position.x + this.agent.velocity.x - this.agent.frictionForce.x/this.agent.mass;
        // const predictedY = this.agent.position.y + this.agent.velocity.y - this.agent.frictionForce.y/this.agent.mass;

        // context.translate(predictedX * scale.x, viewportSize.height - predictedY * scale.y);
        // context.fillRect(offset, offset, this.agent.size, this.agent.size);

        if (this.agent.text) {
            context.font = '24px serif';
//            context.textAlign = 'center';
            context.fillStyle = "#ffffff"
            context.fillText(this.agent.text, 0,0);
        }
    }
}

export default ColoredSquarePainter;