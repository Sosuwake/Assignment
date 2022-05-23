export class Display {
  static create(val1, val2, add) {
    add.innerHTML = `<div id = "randomvalue"><p>${val1} + ${val2}</p></div>
        <input type = "text" id = "ans">`;
    document.querySelector('#root').appendChild(add);
  }
}
