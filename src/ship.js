export default class Ship {
    constructor(length, position) {
        this.length = length;
        this.position = position;
        this.hits = 0;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if(this.hits >= this.length) {
            return true;
        } else {
            return false;
        }
    }
}

