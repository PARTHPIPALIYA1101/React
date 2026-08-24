import { useState } from "react";
function App() {
  // let counter =5;
  const [counter,setCounter] = useState(15);
  const addval = () => {
    setCounter(counter + 1);
  };
  const delval = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={addval}>Add</button>
      <br />
      <button onClick={delval}>Remove</button>
    </>
  )
}

export default App
