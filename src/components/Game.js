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
  const [val1, setVal1] = useState(getNumberFrom0to20);
  const [val2, setVal2] = useState(getNumberFrom0to20);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState(getRandomSign);
  const [count, setCount] = useState(1);

  const getResult = (val1, val2, sign) => {
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




  // when an answer is submitted, whether it is correct or not, the game continues
  // the input is meant to reset
  // save the operator, expression and given answer in history
  // clear and generate a new math expression
  const submit = (e) => {
    e.preventDefault();
    setVal1(getNumberFrom0to20);
    setVal2(getNumberFrom0to20);
    setOperator(getRandomSign);
    {/* 
      setCorrectAnswer((val1) (Operator) (val2))
      if (result == correctAnswer && count < round) {
        it should move to the next question
      }else if (result == correctAnswer && count == round){
        setCurrentDiplay(End)
        }else if (result != correctAnswer){
             nothing shousld happen
        }
  
 */}
    setResult("");
    
  };

  const afterSubmit = () => {
    const history = ["operator", "expression", "givenanswer"];
  };

  const handleClick = () => {
    setCurrentDisplay(DisplayMap.Start);
  };

  return (
    <div className="gameplay">
      <form onSubmit={submit}>
        <h2 className="math">{`${val1} ${operator} ${val2}`}</h2>
        <input value={result} onChange={(e) => setResult(e.target.value)} />
        <button type="submit">Play</button>
      </form>
      <button id="start" type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};




const getNumberFrom0to20 = () => Math.floor(Math.random() * 20);
const getRandomSign = () => {
  const signs = ["+", "-", "/", "*"];
  const length = signs.length;
  const randomIndex = Math.floor(Math.random() * length);
  return signs[randomIndex];
};
