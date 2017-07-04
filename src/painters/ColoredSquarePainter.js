class ColoredSquarePainter {

    constructor(agent) {
        this.agent = agent;
    }

    paint = (context, scale) => {
        context.translate(this.agent.position.x * scale.x,this.agent.position.y * scale.y);
        context.fillStyle = this.agent.color;
        let offset = -this.agent.size / 2;
//        context.fillRect(offset * scale.x, offset * scale.y, this.agent.size * scale.x, this.agent.size * scale.y);
        context.fillRect(offset, offset, this.agent.size, this.agent.size);

        if (this.agent.text) {
            context.font = '24px serif';
//            context.textAlign = 'center';
            context.fillStyle = "#ffffff"
            context.fillText(this.agent.text, 0,0);
        }
    }
}

export default ColoredSquarePainter;