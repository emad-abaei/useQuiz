import { Dispatch } from "react";
import { Action, ActionType } from "../types";

interface StartScreenProps {
  questionCount: number;
  dispatch: Dispatch<Action>;
}

function StartScreen({ questionCount, dispatch }: StartScreenProps) {
  function handleClick() {
    dispatch({ type: ActionType.ACTIVE });
  }

  return (
    <div className='start'>
      <h2>Welcome to the Quiz!</h2>
      <h3>{questionCount} questions to test your skill</h3>
      <button className='btn btn-ui' onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
