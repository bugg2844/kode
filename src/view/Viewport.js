import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Viewport extends Component {

    constructor(props, context) {
        super(props, context);
        props.engine.registerViewport(this);
    }

    componentDidMount = () => {
        console.log("Initial saving context");
        this.context = ReactDOM.findDOMNode(this).getContext('2d');
    }

    componentDidUpdate = () => {
        console.log("Saving context");
        this.context = ReactDOM.findDOMNode(this).getContext('2d');
    }

    paint = () => {
        var context = this.context;
        context.save();

        context.fillStyle = '#000';
        context.fillRect(0,0,this.props.size.width,this.props.size.height);

        for (const agent of this.props.engine.world.agents) {
            context.save();
            context.translate(agent.position.x,agent.position.y);
            context.fillStyle = agent.color;
            let offset = -agent.size / 2;
            context.fillRect(offset, offset, agent.size, agent.size);
            context.restore();
        }

        context.restore();
    }

    render = () => {
        return <canvas width={this.props.size.width} height={this.props.size.height} />;
    }

}

export default Viewport;
