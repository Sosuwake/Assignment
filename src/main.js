import { gameRun } from './gamerun';
import { endGame } from './startgame';

import { TimeCapture } from './time-capture';

const timeCapture = new TimeCapture();

setTimeout(function() {
    console.log( timeCapture.check() + " ms have elapsed" ); //~100 ms have elapsed
    timeCapture.reset();
    setTimeout(function() {
        console.log( timeCapture.check() + " ms have elapsed" ); //~200 ms have elapsed

