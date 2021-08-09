import React from "react";
import text from "./constants";
import ScoreTable from "./ScoreTable";

const Score = ({ roll, takeTurn, disabledBtn, setFinalRoll }) => {
  const submitScore = (category) => {
    takeTurn(category(roll));
  };

  return (
    <div>
      <h2>Score</h2>
      <ScoreTable
        disabledBtn={disabledBtn}
        roll={roll}
        section={text.upperSection}
        submitScore={submitScore}
        setFinalRoll={setFinalRoll}
      />
      <ScoreTable
        disabledBtn={disabledBtn}
        roll={roll}
        section={text.upperSection}
        submitScore={submitScore}
        setFinalRoll={setFinalRoll}
      />
    </div>
  );
};

export default Score;
