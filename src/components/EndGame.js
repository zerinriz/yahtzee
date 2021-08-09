import React, { useEffect } from "react";

const EndGame = ({ newGame, totalScore, highScore }) => {
  useEffect(() => {
    localStorage.setItem("High Score", JSON.stringify(highScore));
  }, [highScore]);
  useEffect(() => {
    localStorage.setItem("Total Score", JSON.stringify(totalScore));
  }, [totalScore]);

  return (
    <>
      <h2>Game Over</h2>
      <h2>High score: {highScore}</h2>
      <h3>Score: {totalScore}</h3>
      <button onClick={newGame} className="btn roll-btn">
        New Game
      </button>
    </>
  );
};

export default EndGame;
