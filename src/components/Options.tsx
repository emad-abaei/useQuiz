import { Dispatch, MouseEvent } from "react";
import { Action, ActionType, QuestionType } from "../types";

interface OptionsProps {
  question: QuestionType;
  answer: null | number;
  dispatch: Dispatch<Action>;
}

function Options({ question, dispatch, answer }: OptionsProps) {
  const hasAnswered = answer !== null;

  function handleClick(_: MouseEvent, ix: number): void {
    dispatch({ type: ActionType.NEWANSWER, payload: ix });
  }

  return (
    <div className='options'>
      {question.options.map((option, ix) => (
        <button
          className={`btn btn-option ${answer === ix ? "answer" : ""} ${
            hasAnswered && (ix === question.correctOption ? "correct" : "wrong")
          }`}
          key={ix}
          onClick={(e) => handleClick(e, ix)}
          disabled={hasAnswered}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
