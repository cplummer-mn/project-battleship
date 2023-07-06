import Player from "./player";
import UI from "./ui";

export default class GameLoop {
    
    static startGame() {
        const player = new Player("John", false);
        const cpu = new Player("CPU", true);
        
        GameLoop.placeShips(player);
        GameLoop.placeShips(cpu);

        UI.displayBoard(player);
        UI.displayBoard(cpu);
    }

    //Place ships in default spots for now
    static placeShips(player) {
        player.gameboard.placeShip(2,2,2);
        player.gameboard.placeShip(3,4,2);
        player.gameboard.placeShip(3,1,7);
        player.gameboard.placeShip(4,10,3);
        player.gameboard.placeShip(5,7,6);
    }
}