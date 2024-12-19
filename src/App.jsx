import ComponentA from "./components/Component1";
import ComponentB from "./components/Component2";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [showComponentA, setShowComponentA] = useState(true);

  useEffect(() => {
    console.log(counter);
    console.log(`Updated Counter: ${counter}`);

    return () => {
      console.log(`Last counter value => ${counter}`);
    };
  }, [counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      {showComponentA ? <ComponentA /> : <ComponentB />}
      <button onClick={() => setShowComponentA(!showComponentA)}>Toggle</button>
    </div>
  );
}

export default App;