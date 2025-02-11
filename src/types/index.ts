export enum ActionType {
  DATARECEIVED = "dataReceived",
  ERROR = "error",
  ACTIVE = "active",
  NEWANSWER = "newAnswer",
  NEXTQUESTION = "nextQuestion",
  FINISH = "finish",
  RESTART = "restart"
}

export interface State {
  questions: QuestionType[];
  status: "loading" | "ready" | "error" | "active" | "finished";
  error?: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
}

export type DataReceivedAction = {
  type: ActionType.DATARECEIVED;
  payload: QuestionType[];
};

export type ErrorAction = {
  type: ActionType.ERROR;
  payload: string;
};

export type ActiveAction = {
  type: ActionType.ACTIVE;
};

export type AnswerAction = {
  type: ActionType.NEWANSWER;
  payload: number;
};

export type NextAction = {
  type: ActionType.NEXTQUESTION;
};

export type FinishAction = {
  type: ActionType.FINISH;
};

export type RestartAction = {
  type: ActionType.RESTART;
};

export type Action =
  | DataReceivedAction
  | ErrorAction
  | ActiveAction
  | AnswerAction
  | NextAction
  | FinishAction
  | RestartAction;

export type QuestionType = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};
