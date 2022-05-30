import {Display} from "./display";
import { firstEx } from "./game";
import { setTimeout } from "./endgame"

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

