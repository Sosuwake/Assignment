import { TimeCapture } from './time-capture';

const timeCapture = new TimeCapture();

setTimeout(function() {
    console.log( timeCapture.check() + " ms have elapsed" ); 
    timeCapture.reset();
    setTimeout(function() {
        console.log( timeCapture.check() + " ms have elapsed" ); 


export default setTimeout