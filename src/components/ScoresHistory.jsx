import { useContext } from "react";

import { ScoreContext } from "../store/ScoreContext";

function ScoresHistory() {
  const scoreCtx = useContext(ScoreContext);

  return (
    <div className="scores-container">
      <h2>Scores History</h2>
      {scoreCtx.scores.map((score, i) => (
        <p key={i}>
          Round {i + 1}: {score}
        </p>
      ))}
    </div>
  );
}

export default ScoresHistory;
