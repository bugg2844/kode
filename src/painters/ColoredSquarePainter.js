class ColoredSquarePainter {

    constructor(agent) {
        this.agent = agent;
    }

    paint = (context) => {
        context.translate(this.agent.position.x,this.agent.position.y);
        context.fillStyle = this.agent.color;
        let offset = -this.agent.size / 2;
        context.fillRect(offset, offset, this.agent.size, this.agent.size);

        if (false && this.agent.text) {
            context.font = '14px serif';
//            context.textAlign = 'center';
            context.fillStyle = "#ffffff"
            context.fillText(this.agent.text, 0,0);
        }
    }
}

export default ColoredSquarePainter;