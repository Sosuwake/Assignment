import {Display} from './display';

export const firstEx = (game) => {
  const firstNum = Math.floor((Math.random() * 9) + 1);
  const secondNum = Math.floor((Math.random() * 9) + 1);
  Display.create(firstNum, secondNum, game);
  return sum(firstNum, secondNum);
};

