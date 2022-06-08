export class Display {
    render(state, firstNum, secondNum) {
        switch (state) {
            case "setup":
                document.querySelector('#root').innerHTML= `<div class='container'>
                <p class='expression'>Hey!<br>Let's see your mathemagician powers!</p>
                <button class='start-button'>START</button>
            </div>`;
            break;
            case "gameplay":
                document.querySelector('#root').innerHTML=`<div class='container'>
                <p class='expression'>${firstNum} + ${secondNum}</p>
                <input type=text autofocus="true" id='answer-input'>
                <p id='wrong-answer'></p>
            </div>`;
            break;
            case "end":
                document.querySelector('#root').innerHTML=`
                <div class='container'>
                <p class='expression'>You spent ${firstNum} milliseconds</p>
                <button class='start-button'>REPLAY?</button>
                </div>`;
            break;
            case "wrongAnswer": 
                if (firstNum.trim()=='') {
                    document.querySelector('#wrong-answer').innerHTML=`Answer the question`;
                } else {
                    document.querySelector('#wrong-answer').innerHTML=`${firstNum} is not the Answer`;
                }
            break;

        }
        document.querySelector("#answer-input") ? document.querySelector("#answer-input").focus() : 
        document.querySelector(".start-button").focus();
    } 
    
}

