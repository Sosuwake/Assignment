import {Display} from "./display.js";
export default class Game {
    constructor() {
        this.level=0;
        this.add=0;
        this.time=0;
        this.display=new Display();

    }

   
    gameplay() {
        const firstNum = Math.floor(Math.random() * 10);
        const secondNum = Math.floor(Math.random() * 10);
        this.level++;
        this.add = firstNum + secondNum;
        this.display.render("gameplay", firstNum, secondNum);
        
    }


    end() {
        this.display.render("end", Date.now()-this.time);
        this.level=0;
        this.add=0;
        this.time=0;
    }

    start() {
        this.time=Date.now();
        this.gameplay();
    }

    validateResult(value) {
        if (value == this.add && this.level < 3) {
            this.gameplay();
        } else if (value == this.add && this.level>=3) {
            this.end();
        } else {
            this.display.render("wrongAnswer",value);
        }
    
    }
    
}

