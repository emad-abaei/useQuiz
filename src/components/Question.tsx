import { Dispatch } from "react";
import Options from "./Options";
import { QuestionType } from "../types";
import { Action } from "../types";

interface QuestionProps {
  question: QuestionType;
  answer: null | number;
  dispatch: Dispatch<Action>;
}

function Question({ question, dispatch, answer }: QuestionProps) {
  return (
    <>
      <h2>{question.question}</h2>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </>
  );
}

export default Question;
