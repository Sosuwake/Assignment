import React from "react";

export function End(props) {
  const { time, gameHistory, setGameHistory } = props;

  return (
    <div className="end">
      <p id="game_over">Game Over,</p>
      <ul>
        {gameHistory.map((gameHistoryItem) => (
          <li key={gameHistoryItem.createdAt}><div>Question: {gameHistoryItem.question}</div>
          <div>Answer: {gameHistoryItem.answer}</div>
          <div>Time: {gameHistoryItem.time}</div></li>
        ))}
      </ul>
      <p id="time_spent">you spent {Date.now() - time} ms. </p>
    </div>
  );
}
