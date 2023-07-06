import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.gridSize = 10;
        this.grid = this.createGrid();
        this.ships = 5;
    }


    createGrid() {
        const grid  = [];
        for(let i = 0; i < this.gridSize; i++) {
            const row  = [];
            for(let j = 0; j < this.gridSize; j++) {
                row.push({x: i, y: j, ship: null, isHit: false})
            }
            grid.push(row);
        }
        return grid;
    }

    placeShip(length, x, y) {
        const ship = new Ship(length, [x,y]);
        for(let i = 0; i < ship.length; i++) {
            this.grid[x-1][y-1+i].ship = ship;
        }
    }

    receiveAttack(x, y) {
        if(this.grid[x-1][y-1].ship === null) {
            this.grid[x-1][y-1].isHit = true;
        } else {
            this.grid[x-1][y-1].ship.hit();
            this.grid[x-1][y-1].isHit = true;
            if(this.grid[x-1][y-1].ship.isSunk()) {
                this.ships--;
            }
        }
        if(this.ships === 0) {
            console.log("Game Over");
        }
    }
}