import Player from "./player";

export default class  UI {
    
    static loadPage() {
        UI.createBoards();
        UI.createEventListeners();
    }
    
    static createBoards() {
        const playerBoard = document.getElementById('player-board');
        for(let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row')
            for(let j = 0; j < 10; j++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                gridSquare.id = `p${i}${j}`;
                row.appendChild(gridSquare); 
            }
            playerBoard.appendChild(row);
        }

        const cpuBoard = document.getElementById('cpu-board');
        for(let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('grid-row')
            for(let j = 0; j < 10; j++) {
                const gridSquare = document.createElement('div');
                gridSquare.classList.add('grid-square');
                gridSquare.id = `c${i}${j}`;
                row.appendChild(gridSquare); 
            }
            cpuBoard.appendChild(row);
        }
    }

    static createEventListeners() {
        const gridSqaures = document.getElementsByClassName('grid-square');
        for(const gridSquare of gridSqaures) {
            gridSquare.addEventListener('click', () => {
                console.log(gridSquare.id);
            });
        }
    }

    static displayBoard(player) {
        const grid = player.gameboard.grid;
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(grid[i][j].ship === null) {

                } else {
                    if(player.isCpu) {
                        const gridSquare = document.getElementById(`c${i}${j}`);
                        gridSquare.style.backgroundColor = 'blue';
                    } else {
                        const gridSquare = document.getElementById(`p${i}${j}`);
                        gridSquare.style.backgroundColor = 'blue';
                    }
                }
            }
        }
    }
}