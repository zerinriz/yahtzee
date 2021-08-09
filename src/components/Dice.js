import React from "react";

const Dice = ({
  roll,
  setRoll,
  rollCount,
  setRollCount,
  hold,
  setHold,
  setDisabledBtn,
  disabledBtn,
  finalRoll,
  setFinalRoll,
}) => {
  const handleNewRoll = () => {
    setRollCount(rollCount + 1);
    if (rollCount === 2) {
      setFinalRoll(true);
    }
    setRoll(newRoll(roll, hold));
    setDisabledBtn(false);
  };

  const handleNewHold = (index) => () => {
    let temp = new Array(...hold);
    temp[index] = !temp[index];
    setHold(temp);
  };

  const newRoll = (current, fixed) => {
    let output = [0, 0, 0, 0, 0];

    current.forEach((val, i) => {
      output[i] = fixed[i] ? current[i] : Math.floor(Math.random() * 6) + 1;
    });

    return output;
  };

  return (
    <>
      <div>
        {roll.map((val, i) => (
          <div key={`dice-${i}`} className="dice-box">
            <div className="dice"></div>
            <button
              disabled={disabledBtn}
              onClick={handleNewHold(i)}
              className={hold[i] ? "btn release-btn" : "btn hold-btn"}
            >
              {val}
            </button>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={handleNewRoll}
          disable={(rollCount > 3).toString()}
          className="btn roll-btn"
          disabled={finalRoll}
        >
          {rollCount < 3
            ? rollCount === 0
              ? `Start Turn`
              : `Re-Roll ${rollCount} of 2`
            : `No Rolls Remaining`}
        </button>
      </div>
    </>
  );
};

export default Dice;
