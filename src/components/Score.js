import React from "react";
import text from "./constants";
import ScoreTable from "./ScoreTable";

const Score = ({ roll, takeTurn, disabledBtn }) => {
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
      />
      <ScoreTable
        roll={roll}
        section={text.lowerSection}
        submitScore={submitScore}
      />
    </div>
  );
};

export default Score;
