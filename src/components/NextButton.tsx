import { Dispatch } from "react";
import { Action, ActionType } from "../types";

interface NextButtonProps {
  answer: null | number;
  dispatch: Dispatch<Action>;
  index: number;
  questionsCount: number;
}

function NextButton({
  answer,
  dispatch,
  index,
  questionsCount
}: NextButtonProps) {
  function handleClick() {
    if (index + 1 === questionsCount) dispatch({ type: ActionType.FINISH });

    dispatch({ type: ActionType.NEXTQUESTION });
  }

  if (answer === null) return null;

  return (
    <button
      className='btn btn-ui'
      onClick={handleClick}
      aria-label='Next question'>
      {index + 1 === questionsCount ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
