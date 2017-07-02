import React, { Component } from 'react';
import './App.css';
import World from './world/World';
import Viewport from './view/Viewport';
import Seeker from './agents/Seeker';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.world = new World(600, 600);
        this.viewportSize = {width: 600, height: 600};

        for (let i = 0; i < 1000; i++) {
            this.world.addAgent(new Seeker("Seeker " + i,20,20, 1 + 10.0  * Math.random()));
        }
    }

    componentDidMount = () => {
        requestAnimationFrame(this.tick);
    }

    tick = () => {
        this.world.tick();
        requestAnimationFrame(this.tick);
    }

    render = () => {
        return <div><Viewport world={this.world} size={this.viewportSize} /></div>
    }
}

export default App;
