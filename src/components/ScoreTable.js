import React, { useState } from "react";

const ScoreTable = ({ roll, section, submitScore, disabledBtn }) => {
  let [scored, setScored] = useState(new Array(section.length).fill(null));

  const handleClick = (category, index) => () => {
    let temp = new Array(...scored);
    temp[index] = category(roll);
    setScored(temp);
    submitScore(category);
  };

  const sectionTotal = scored.reduce((a, b) => a + b, 0);

  return (
    <table className="score-table">
      <thead className="thead">
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {section.length > 0
          ? section.map((row, i) => (
              <tr key={row.id}>
                <td>{row.category}</td>
                <td>{row.description}</td>
                <td>
                  {scored[i] !== null ? (
                    scored[i]
                  ) : row.bonus ? (
                    row.calc(sectionTotal)
                  ) : (
                    <button
                      disabled={disabledBtn}
                      onClick={handleClick(row.calc, i)}
                      className="btn hold-btn"
                    >
                      Submit {row.calc ? row.calc(roll) : ""}
                    </button>
                  )}
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default ScoreTable;
