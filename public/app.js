
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "body{\n    height: 100vh;\n}\n.expression{\n    display: flex;\n    justify-content: center;\n}\n#root{\n    background-image: url(\"https://c4.wallpaperflare.com/wallpaper/818/410/415/albert-einstein-formula-math-wallpaper-preview.jpg\");\n    font-size: 2em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100%;\n}\n.start-button{\n    margin: 1rem auto;\n    display: block;\n}\n.container{\n    background-color: white;\n    border-radius: 0.6rem;\n    padding: 1.5rem;\n}\n#wrong-answer{\n    width: fit-content;\n    margin: auto;\n    color: black;\n    font-size: 0.7rem;\n}";
  styleInject(css_248z);

  class Display {
    render(state, firstNum, secondNum) {
      switch (state) {
        case "setup":
          document.querySelector('#root').innerHTML = `<div class='container'>
                <p class='expression'>Hey!<br>Let's see your mathemagician powers!</p>
                <button class='start-button'>START</button>
            </div>`;
          break;

        case "gameplay":
          document.querySelector('#root').innerHTML = `<div class='container'>
                <p class='expression'>${firstNum} + ${secondNum}</p>
                <input type=text autofocus="true" id='answer-input'>
                <p id='wrong-answer'></p>
            </div>`;
          break;

        case "end":
          document.querySelector('#root').innerHTML = `
                <div class='container'>
                <p class='expression'>You spent ${firstNum} milliseconds</p>
                <button class='start-button'>REPLAY?</button>
                </div>`;
          break;

        case "wrongAnswer":
          if (firstNum.trim() == '') {
            document.querySelector('#wrong-answer').innerHTML = `Answer the question`;
          } else {
            document.querySelector('#wrong-answer').innerHTML = `${firstNum} is not the Answer`;
          }

          break;
      }

      document.querySelector("#answer-input") ? document.querySelector("#answer-input").focus() : document.querySelector(".start-button").focus();
    }

  }

  class Game {
    constructor() {
      this.level = 0;
      this.add = 0;
      this.time = 0;
      this.display = new Display();
    }

    gameplay() {
      const firstNum = Math.floor(Math.random() * 10);
      const secondNum = Math.floor(Math.random() * 10);
      this.level++;
      this.add = firstNum + secondNum;
      this.display.render("gameplay", firstNum, secondNum);
    }

    end() {
      this.display.render("end", Date.now() - this.time);
      this.level = 0;
      this.add = 0;
      this.time = 0;
    }

    start() {
      this.time = Date.now();
      this.gameplay();
    }

    validateResult(value) {
      if (value == this.add && this.level < 3) {
        this.gameplay();
      } else if (value == this.add && this.level >= 3) {
        this.end();
      } else {
        this.display.render("wrongAnswer", value);
      }
    }

  }

  const game = new Game();
  const display = new Display();
  display.render('setup');
  document.querySelector('#root').addEventListener('keyup', e => {
    const target = e.target;

    if (target.matches("#answer-input")) {
      game.validateResult(document.querySelector('#answer-input').value);
    }
  });
  document.querySelector('#root').addEventListener('click', e => {
    const target = e.target;

    if (target.matches(".start-button")) {
      game.start();
    }
  });

})();
//# sourceMappingURL=app.js.map
