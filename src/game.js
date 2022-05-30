import {sum} from './gameadd';
import {Display} from './display';

export const firstEx = (game) => {
  const val1 = Math.floor((Math.random() * 9) + 1);
  const val2 = Math.floor((Math.random() * 9) + 1);
  Display.create(val1, val2, game);
  return sum(val1, val2);
};

