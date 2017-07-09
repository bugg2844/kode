import React, { Component } from 'react';
import './App.css';
import Engine from './engine/Engine';
import Viewport from './view/Viewport';
import * as world from './world';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            viewportSize: {
                width: 0,
                height: 0
            }
        }
        this.engine = new Engine();
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.engine.start(new world.ChaseWorld());
    }

    componentWillUnmountMount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {

        const viewportSize = {
            width: window.innerWidth,
            height: window.innerHeight - 30
        }

        this.setState({
            viewportSize
        });
    }

    render = () => {
        return <div>
            <Viewport engine={this.engine} size={this.state.viewportSize} />
            <br/>
            <button onClick={() => {this.engine.start(new world.BounceWorld())}}>Bounce</button>
            <button onClick={() => {this.engine.start(new world.ChaseWorld())}}>Chase</button>
            <button onClick={() => {this.engine.start(new world.LineChaseWorld())}}>Line Chase</button>
        </div>
    }
}

export default App;
