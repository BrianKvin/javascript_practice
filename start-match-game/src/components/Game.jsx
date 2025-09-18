import React from "react";
import utils from "../utils/utils";
import colors from "../utils/theme";
import useGameState from "../hooks/useGameState";

const Game = ({ startNewGame }) => {
  const { stars, availableNums, candidateNums, secondsLeft, setGameState } =
    useGameState(10); // 10 seconds

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
        Pick 1 or more numbers that sum to the number of stars
      </div>
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
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
