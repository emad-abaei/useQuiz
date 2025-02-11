import { useEffect, useReducer } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import Loader from "./components/Loader";
import Error from "./components/Error";
import NextButton from "./components/NextButton";
import Timer from "./components/Timer";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import { State, Action, ActionType } from "./types";

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0
};

// Using Json Server
const URL = "http://localhost:3000";

const reducer: React.Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionType.DATARECEIVED:
      return { ...state, questions: action.payload, status: "ready" };

    case ActionType.ERROR:
      return { ...state, error: action.payload, status: "error" };

    case ActionType.ACTIVE:
      return { ...state, status: "active" };

    case ActionType.NEWANSWER:
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points
      };

    case ActionType.NEXTQUESTION:
      return { ...state, index: state.index + 1, answer: null };

    case ActionType.FINISH:
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore
      };

    case ActionType.RESTART:
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        highscore: state.highscore
      };

    default:
      throw new window.Error(`Unknown action type`);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index, answer, points, highscore } = state;
  const questionsCount = questions.length;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(() => {
    const fetchQuestions = async function () {
      try {
        const res = await fetch(`${URL}/questions`);
        const data = await res.json();

        dispatch({ type: ActionType.DATARECEIVED, payload: data });
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? (err as Error).message
            : "Unkonwn error occured.";

        dispatch({ type: ActionType.ERROR, payload: errorMessage });
      }
    };

    setTimeout(() => {
      fetchQuestions();
    }, 500);
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionCount={questionsCount} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              questionsCount={questionsCount}
              currentPoints={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                questionsCount={questionsCount}
              />
              <Timer questionsCount={questionsCount} dispatch={dispatch} />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
