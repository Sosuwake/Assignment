import React from "react";

export function End(props) {
  const { time, gameHistory, setGameHistory } = props;

  return (
    <div className="end">
      <p id="game_over">Game Over,</p>
      <ul>
        {gameHistory.map((gameHistoryItem) => {
          const { createdAt, question, playerAnswer, expectedAnswer, time } =
            gameHistoryItem;

          const getStyleFromTime = (time) => {
            const approximate = (number) => +Number(number).toFixed(1);

            return approximate(expectedAnswer) !== approximate(playerAnswer)
              ? "red"
              : time < 3
              ? "green"
              : "orange";
          };

          return (
            <li key={createdAt}>
              <div>Question: {question}</div>
              <div>Answer: {playerAnswer}</div>
              <div className={getStyleFromTime(time)}>Time: {time}</div>
            </li>
          );
        })}
      </ul>
      <p id="time_spent">you spent {Date.now() - time} ms. </p>
    </div>
  );
}
