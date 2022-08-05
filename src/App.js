import { React, useState } from "react";
import { Start } from "./components/Start";
import { Game } from "./components/Game";
import { End } from "./components/End";
import { DisplayMap } from "./constants";

export const App = () => {
  const [currentDisplay, setCurrentDisplay] = useState(DisplayMap.Start);
  const [currentRound, setCurrentRound] = useState("3");
  const [time, setTime] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  return (
    <div>
      {currentDisplay === DisplayMap.Start ? (
        <Start
          setCurrentDisplay={setCurrentDisplay}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          setTime={setTime}
        />
      ) : null}
      {currentDisplay === DisplayMap.Game && (
        <Game
          setCurrentDisplay={setCurrentDisplay}
          currentRound={currentRound}
          setCurrentRound={setCurrentRound}
          gameHistory={gameHistory}
          setGameHistory={setGameHistory}
        />
      )}
      {currentDisplay === DisplayMap.End && (
        <End
          setCurrentDisplay={setCurrentDisplay}
          time={time}
          gameHistory={gameHistory}
        />
      )}
    </div>
  );
};
