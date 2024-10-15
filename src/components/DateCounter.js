import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dec": {
      return {
        ...state,
        count: state.count - state.step,
      };
    }
    case "inc": {
      return {
        ...state,
        count: state.count + state.step,
      };
    }
    case "defineCount": {
      return {
        ...state,
        count: action.nextCount,
      };
    }
    case "defineStep": {
      return {
        ...state,
        step: action.nextStep,
      };
    }
    case "reset": {
      return {
        count: 0,
        step: 1,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 }
  const [state, dispatch] = useReducer(reducer, initialState);
  // 解构
  const {count, step} = state
  const date = new Date("june 21 2027");

  date.setDate(date.getDate() + count);

  function dec() {
    dispatch({ type: "dec" });
  }

  function inc() {
    dispatch({ type: "inc" });
  }

  function defineCount(e) {
    dispatch({
      type: "defineCount",
      nextCount: Number(e.target.value),
    });
  }

  function defineStep(e) {
    dispatch({
      type: "defineStep",
      nextStep: Number(e.target.value),
    });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
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
