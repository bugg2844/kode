import Agent from './Agent';

class Seeker extends Agent {
    constructor(name, x, y, size) {
        super(x, y, size);
        this.name = name;
    }

}

export default Seeker;
