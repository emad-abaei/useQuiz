import { Dispatch, useEffect, useState } from "react";
import { Action, ActionType } from "../types";

interface TimerProps {
  questionsCount: number;
  dispatch: Dispatch<Action>;
}

const TIME_PER_QUESTION: number = 30;

function Timer({ questionsCount, dispatch }: TimerProps) {
  const [count, setCount] = useState(questionsCount * TIME_PER_QUESTION);

  const min = Math.floor(count / 60);
  const sec = count % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      if (count <= 1) dispatch({ type: ActionType.FINISH });
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className='timer'>
      {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec}
    </div>
  );
}

export default Timer;
