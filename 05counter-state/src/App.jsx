import { useState,useReducer, useRef } from "react";
// function App() {
//   const [counter,setCounter] = useState(0);
//   function reducerFn(counter, action){
//     if (action.type === "INC") return counter + 1;
//     if (action.type === "DEC") return counter - 1;
//     return counter;
//   }
//   const addval = () => {
//     setCounter(counter + 1);
//   };
//   const delval = () => {
//     setCounter(counter - 1);
//   };
//   return (
//     <>
//       <h2>Counter : {counter}</h2>
//       <button onClick={addval()}>Add</button>
//       <br />
//       <button onClick={delval()}>Remove</button>
//     </>
//   )
// }


function App() {
  let ref=useRef(0);
  const [counter, setCounter] = useState(0);
  const addval = () => {
    ref.current=ref.current+1;
    setCounter(ref.current);
  };
  const delval = () => {
    ref.current=ref.current-1;
    setCounter(ref.current);
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
export default App;