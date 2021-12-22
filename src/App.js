import "./styles.css";
import Counter from "./Counter.js";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  //const count = state[0]
  //const setCount = state[1]
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
