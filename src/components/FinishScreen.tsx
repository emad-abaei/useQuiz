import { Dispatch } from "react";
import { Action, ActionType } from "../types";

interface FinishScreenProps {
  points: number;
  totalPoints: number;
  highscore: number;
  dispatch: Dispatch<Action>;
}

function FinishScreen({
  points,
  totalPoints,
  highscore,
  dispatch
}: FinishScreenProps) {
  const pointsPercentage = Math.ceil((points / totalPoints) * 100);

  function handleClick(): void {
    dispatch({ type: ActionType.RESTART });
  }

  return (
    <div>
      <p className='result'>
        You Scored <strong>{points}</strong> out of {totalPoints} (
        {pointsPercentage}%)
      </p>
      <p className='highscore'>High Score: {highscore} points</p>
      <button
        className='btn btn-ui'
        onClick={handleClick}
        aria-label='Restart the quiz'>
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
