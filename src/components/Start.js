import React from "react";
import { DisplayMap } from "../constants";

export function Start(props) {
  const { currentRound, setCurrentRound, setCurrentDisplay, setTime } = props;

  const handleChange = (e) => {
    const userValue = e.target.value;
    if (userValue >= 1 && userValue <= 20) {
    setCurrentRound(userValue);
    }
  };

  const handleClick = () => {
    setTime(Date.now());
    setCurrentDisplay(DisplayMap.Game);
  };

  return (
    <div>
      <h1 className="intro">
        Hi this is Osuwake's math game, choose your parameters and get to
        calculating!
      </h1>
      <div className="rounds">
        <label>Select number of rounds:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={currentRound}
          onChange={handleChange}
          autoFocus
        />
        <button type="button" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
