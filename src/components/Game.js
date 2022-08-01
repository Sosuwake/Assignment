import React, { useState, useEffect } from "react";
import { DisplayMap, generateProblem } from "../constants";
/* eslint-disable */ 
// number of rounds must be autofocused
// increase the size of the terms in expressions from 0-19
// randomly select numbers and signs in each round and test for all operators
// compare the player's answer with the correct answer and if it's wrong, the game continues
// display the different expressions and the answers given
// if the answer is given within three seconds or less it should appear green
// if the correct answer is given in more than three seconds it should appear orange
// if the wrong answer is given it should be red
// the amount of time spent on each guess should be displayed in square brackets beside each expression  
// when an answer is submitted, whether it is correct or not, the game continues
// the input is meant to reset
// save the operator, expression and given answer in history
// clear and generate a new math expression
//funtion that generates a new problem

// const [val1, setVal1] = useState(getNumberFrom0to20);
// const [val2, setVal2] = useState(getNumberFrom0to20);
// const [operator, setOperator] = useState(getRandomSign);

// setVal1(getNumberFrom0to20);
// setVal2(getNumberFrom0to20);
// setOperator(getRandomSign);
// setResult("");
// setCorrectAnswer(compareAnswers);

export const Game = (props) => {
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [count, setCount] = useState(1);
  const { currentRound, setCurrentDisplay } = props;

  useEffect(() => {
    generateExpression();
}, []);


  const generateExpression = () => {
      const expression = generateProblem();
      setCorrectAnswer(expression.correctAnswer);
      setQuestion(expression.question);
      
  }

  const submit = (e) => {
    e.preventDefault();
    if (result == correctAnswer && count < currentRound){
      generateExpression();
      setCount(count => count + 1);
    }else if (result == correctAnswer && count == currentRound){
      setCurrentDisplay(DisplayMap.End)
    }
    }
  ;

  // const compareAnswers = () => {
  //   if (result == correctAnswer &&  ) {
      
  //   } else {
  //     setCurrentDisplay(DisplayMap.End);
  //   }
  // };

  // const afterSubmit = () => {
  //   const history = ["operator", "expression", "givenanswer"];
  // };
  const handleClick = () => {
    setCurrentDisplay(DisplayMap.Start);
  };

  return (
    <div className="gameplay">
      <form onSubmit={submit}>
        <h2 className="math">{question}</h2>
        <input value={result} onChange={(e) => setResult(e.target.value)} />
        <button type="submit">Play</button>
      </form>
      <button id="start" type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};



// const getRandomSign = () => {
//   const signs = ["+", "-", "/", "*"];
//   const length = signs.length;
//   const randomIndex = Math.floor(Math.random() * length);
//   return signs[randomIndex];
// };
