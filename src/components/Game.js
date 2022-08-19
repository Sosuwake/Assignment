import React, { useState, useEffect } from "react";
import { DisplayMap, generateProblem } from "../constants";

export const Game = (props) => {
  const { currentRound, setCurrentDisplay, gameHistory, setGameHistory } =
    props;
  const [expression, setExpression] = useState(generateProblem);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(1);
  const [time, setTime] = useState(Date.now());

  const generateExpression = () => {
    const expression = generateProblem();
    setExpression(expression);
    setTime(Date.now());
  };

  const updateGameHistory = () => {
    const { question, correctAnswer } = expression;
    const historyItem = {
      question,
      expectedAnswer: correctAnswer,
      playerAnswer: result,
      time: (Date.now() - time) / 1000,
      createdAt: Date.now(),
    };

    const gameHistoryDuplicate = gameHistory.slice();
    gameHistoryDuplicate.push(historyItem);
    setGameHistory(gameHistoryDuplicate);
  };

  const submit = (e) => {
    e.preventDefault();

    updateGameHistory();

    if (count < currentRound) {
      generateExpression();
      setCount((count) => count + 1);
    }

    if (count === +currentRound) {
      setCurrentDisplay(DisplayMap.End);
    }

    setResult("");
  };

  const handleClick = () => {
    setCurrentDisplay(DisplayMap.Start);
  };

  return (
    <div className="gameplay">
      <form onSubmit={submit}>
        <h2 className="math">{expression.question}</h2>
        <input value={result} onChange={(e) => setResult(e.target.value)} />
        <button type="submit">Play</button>
      </form>
      <button id="start" type="button" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};
