import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Viewport extends Component {

    constructor(props, context) {
        super(props, context);
        props.engine.registerViewport(this);
    }

    componentDidMount = () => {
        this.context = ReactDOM.findDOMNode(this).getContext('2d');
        this.calculateScale();
    }

    componentDidUpdate = () => {
        console.log("Viewport updated");
        this.context = ReactDOM.findDOMNode(this).getContext('2d');
        this.calculateScale();
    }

    calculateScale = () => {
        this.scale = {
            x: this.props.size.width / this.props.engine.worldSize.width,
            y: this.props.size.height / this.props.engine.worldSize.height
        }
    }

    paint = () => {
        var context = this.context;
        context.save();

        context.fillStyle = '#000';
        context.fillRect(0,0,this.props.size.width,this.props.size.height);

        let count = 0;
        for (const agent of this.props.engine.world.agents) {
            count++;
            context.save();

            agent.painter.paint(context,this.scale,this.props.size, count % 10);

            context.restore();
        }

        context.restore();
    }

    render = () => {
        return <canvas width={this.props.size.width} height={this.props.size.height} />;
    }

}

export default Viewport;
