import {sum} from './gameadd';

export const firstEx = (add) => {
  const val1 = Math.floor(Math.random() * 9) + 1;
  const val2 = Math.floor(Math.random() * 9) + 1;
  Display.create(val1, val2, add);
  return sum(val1, val2);
};

