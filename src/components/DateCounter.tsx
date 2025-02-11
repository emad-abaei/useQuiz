import { ChangeEvent, useReducer } from "react";

enum ActionType {
  INCREASE = "increase",
  DECREASE = "decrease",
  SETCOUNT = "setCount",
  SETSTEP = "setStep",
  RESET = "reset"
}

interface State {
  count: number;
  step: number;
}

interface Action {
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  count: 0,
  step: 1
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.DECREASE:
      return { ...state, count: state.count - state.step };

    case ActionType.INCREASE:
      return { ...state, count: state.count + state.step };

    case ActionType.SETCOUNT:
      return { ...state, count: action.payload || 0 };

    case ActionType.SETSTEP:
      return { ...state, step: action.payload || 1 };

    case ActionType.RESET:
      return initialState;

    default:
      throw new Error("Unknown action type");
  }
};

function DateCounter() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date(Date.now());
  date.setDate(date.getDate() + state.count);

  const dec = function (): void {
    dispatch({ type: ActionType.DECREASE });
  };

  const inc = function (): void {
    dispatch({ type: ActionType.INCREASE });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: ActionType.SETCOUNT, payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: ActionType.SETSTEP, payload: Number(e.target.value) });
  };

  const reset = function (): void {
    dispatch({ type: ActionType.RESET });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
