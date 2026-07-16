import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(12);

  const addValue = () => {
    // setCounter(counter + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const removeCounter = () => {
    // setCounter(counter - 1);
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Bilal Reactjs Learning</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>

      <br />
      <br />

      <button onClick={removeCounter}>Remove Value</button>
    </>
  );
}

export default App;
