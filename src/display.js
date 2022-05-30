export class Display {
  render[gameDetails] {
    const {firstNum, secondNum, elements} = gameDetails;

    elements.root.innerHTML = 
    <div id="randomvalue">
      <p>${firstNum} + {secondNum}</p>
    </div>
    <input type="text" id="ans">;
    
  }
 