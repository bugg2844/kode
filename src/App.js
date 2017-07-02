import React, { Component } from 'react';
import './App.css';
import Engine from './engine/Engine';
import Viewport from './view/Viewport';

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
        this.engine.loadBounceWorld();
        this.engine.start();
    }

    componentWillUnmountMount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const newSize = {
            width: window.innerWidth,
            height: window.innerHeight - 30
        }
        this.setState({
            viewportSize: newSize
        });
        this.engine.setSize(newSize);
    }

    render = () => {
        return <div>
            <Viewport engine={this.engine} size={this.state.viewportSize} />
            <br/>
            <button onClick={this.engine.loadBounceWorld}>Bounce</button>
            <button onClick={this.engine.loadChaseWorld}>Chase</button>
        </div>
    }
}

export default App;
