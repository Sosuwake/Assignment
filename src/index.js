import {Display} from "./display";
import { StartGame } from "./startgame";

const root = document.querySelector(#root);

const game = newGame();
const display = new Display();

const {level, firstNum, secondNum} = game.start{};

const gameDetails = {
  firstNum,
  secondNum,
  elements {
    root
  }
}
display.render(gameDetails);

