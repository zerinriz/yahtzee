import React, { useState } from "react";
import Dice from "./Dice";
import Score from "./Score";
import EndGame from "./EndGame";

function Game() {
  let [turn, setTurn] = useState(0);
  let [totalScore, setTotalScore] = useState(0);
  let [roll, setRoll] = useState([0, 0, 0, 0, 0]);
  let [hold, setHold] = useState([false, false, false, false, false]);
  let [rollCount, setRollCount] = useState(0);

  // key for score component reset, could hold a prev game state too?
  let [gameCount, setGameCound] = useState(0);

  let takeTurn = (score) => {
    setTotalScore(totalScore + score);
    setTurn(turn + 1);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
  };

  let newGame = () => {
    setTotalScore(0);
    setTurn(0);
    setRoll([0, 0, 0, 0, 0]);
    setHold([false, false, false, false, false]);
    setRollCount(0);
    setGameCound(gameCount + 1);
  };

  return (
    <div className="App">
      <header className="game-header">
        <h2>Yahtzee!</h2>
        <h3 className="header-item pull-left">Turn: {turn} of 13</h3>
        <h3 className="header-item pull-right">Score: {totalScore}</h3>
      </header>

      <div className="container">
        {turn >= 13 ? (
          <EndGame handleClick={newGame} score={totalScore} />
        ) : (
          <Dice
            roll={roll}
            setRoll={setRoll}
            hold={hold}
            setHold={setHold}
            rollCount={rollCount}
            setRollCount={setRollCount}
          />
        )}
        <hr />
        <Score roll={roll} takeTurn={takeTurn} key={gameCount} />
      </div>
    </div>
  );
}

export default Game;
