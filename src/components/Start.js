import React from "react";

export function Start(props) {
  const { round, setRound, setDisplay, setTime } = props;

  const handleChange = (e) => {
    setRound(e.target.value);
  };

  const handleClick = () => {
    setTime(Date.now());
    setDisplay(1);
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
          value={round}
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
