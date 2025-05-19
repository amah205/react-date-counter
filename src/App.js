import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Step />
      {/* <Counter/> */}
    </div>
  );
}

function Step() {
  const [count, setCount] = useState(0);
  const [steps, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  // const step = 1;
  // const count = 1;
  // let today = new Date();
  /*function plus() {
    if (steps < 10) {
      setStep((s) => s + 1);
    }
  }
  function minus() {
    if (steps > 0) setStep((s) => s - 1);
  }*/

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {steps}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <span>Count:{count} </span>
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
