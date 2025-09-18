import React, { useState } from "react";
import utils from "../utils/utils";
import colors from "../utils/theme";
import useGameState from "../hooks/useGameState";

const Game = ({ startNewGame }) => {
  const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
    useGameState(10);

  const [showInstructions, setShowInstructions] = useState(false);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const numberStatus = (number) => {
    if (!availableNums.includes(number)) return "used";
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumClick = (number, currentStatus) => {
    if (gameStatus !== "active" || currentStatus === "used") return;

    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((n) => n !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="help">
        <p>Pick 1 or more numbers that sum to the number of stars</p>
        <button
          onClick={() => setShowInstructions((prev) => !prev)}
          className="instructions-toggle"
          aria-expanded={showInstructions}
        >
          {showInstructions ? "Hide Instructions ⬆" : "Show Instructions ⬇"}
        </button>
      </div>

      {showInstructions && (
        <div className="instructions">
          <h3>How to Play</h3>
          <ol>
            <li>
              <strong>Objective:</strong> Match the number of stars shown by
              selecting one or more numbers.
            </li>
            <li>
              <strong>Gameplay:</strong>
              <ul>
                <li>Click numbers that add up to the number of stars.</li>
                <li>Correct selections turn blue, incorrect ones turn red.</li>
                <li>Used numbers are grayed out and can't be clicked again.</li>
              </ul>
            </li>
            <li>
              <strong>Winning:</strong> Use all numbers before time runs out!
            </li>
            <li>
              <strong>Timer:</strong> You lose if the timer hits zero.
            </li>
            <li>
              <strong>Restart:</strong> Click "Play Again" to restart.
            </li>
          </ol>
        </div>
      )}

      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <div className="game-done">
              <div
                className="message"
                style={{ color: gameStatus === "lost" ? "red" : "green" }}
              >
                {gameStatus === "lost" ? "Game Over" : "Nice!"}
              </div>
              <button onClick={startNewGame}>Play Again</button>
            </div>
          ) : (
            utils
              .range(1, stars)
              .map((starId) => <div key={starId} className="star" />)
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <button
              key={number}
              className="number"
              style={{ backgroundColor: colors[numberStatus(number)] }}
              onClick={() => onNumClick(number, numberStatus(number))}
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      <div className="timer">⏱ Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
