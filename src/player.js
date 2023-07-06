import Gameboard from "./gameboard";

export default class Player {
    constructor(name, isCpu) {
        this.name = name;
        this.isCpu = isCpu;
        this.gameboard = new Gameboard();
    }
}