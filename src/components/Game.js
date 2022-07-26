import React, { useState, useEffect } from "react";
import { DisplayMap } from "../constants";

// number of rounds must be autofocused
// increase the size of the terms in expressions from 0-19
// randomly select numbers and signs in each round and test for all operators
// compare the player's answer with the correct answer and if it's wrong, the game continues
// display the different expressions and the answers given
// if the answer is given within three seconds or less it should appear green
// if the correct answer is given in more than three seconds it should appear orange
// if the wrong answer is given it should be red
// the amount of time spent on each guess should be displayed in square brackets beside each expression

export const Game = (props) => {
  const { currentRound, setCurrentDisplay } = props;
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [sum, setSum] = useState("");
  const [count, setCount] = useState(1);

  {
    useEffect(() => mathExpression(), []);

    const mathExpression = () => {
      setVal1(Math.floor(Math.random() * 20));
      setVal2(Math.floor(Math.random() * 20));
    };

    const signs = ["+", "-", "/", "*"];

    const getOperation = (val1, val2, sign) => {
      switch (sign) {
        case "+":
          return val1 + val2;
        case "-":
          return val1 - val2;
        case "/":
          return val1 / val2;
        case "*":
          return val1 * val2;
      }
    };

    const submit = (e) => {
      e.preventDefault();
      const formValid = sum >= 0;
      if (!formValid) {
        return;
      }

      if (+val1 + +val2 === +sum) {
        setCount((count) => count + 1);

        if (count == currentRound) {
          setCurrentDisplay(DisplayMap.End);
        }
        setSum("");
        mathExpression();
      }
    };

    const handleClick = () => {
      setCurrentDisplay(DisplayMap.Start);
    };

    return (
      <div className="gameplay">
        <form onSubmit={submit}>
          <h2 className="math">{`${val1} +  ${val2}`}</h2>
          <input value={sum} onChange={(e) => setSum(e.target.value)} />
          <button type="submit">Play</button>
        </form>
        <button id="start" type="button" onClick={handleClick}>
          Home
        </button>
      </div>
    );
  }
};
const getNumberFrom0to20 = () => {
  Math.floor(Math.random() * 20);
};
