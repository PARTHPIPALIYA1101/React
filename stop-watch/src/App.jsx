// import { useRef, useState } from "react";

// function App() {
//   const [time, setTime] = useState(0);
//   const ref = useRef(null);
//   const start =() => {
//     if(ref.current !== null) return;
//     ref.current = setInterval(() =>{
//       setTime(prev => prev + 1);
//     }, 1000);
//   }
//   const stop = () => {
//     clearInterval(ref.current);
//     ref.current=null;
//   }
//   const reset = () => {
//     stop();
//     setTime(0);
//   }
//   return (
//     <>
//       <h2>Stopwatch: {time}s</h2>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// export default App;

// import { useRef } from "react";
// function App() {
//   const videoRef =useRef(null);
//   const playVideo=()=>videoRef.current.play();
//   const pauseVideo=()=>videoRef.current.pause();
//   return (
//     <>
//       <video
//         ref={videoRef}
//         width="500"
//         src="https://lorem.video/720p"
//       />
//       <button onClick={playVideo}>Play</button>
//       <button onClick={pauseVideo}>Pause</button>
//     </>
//   );
// }
// export default App;

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [input, setinput] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    async function datalayooooooo() {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const json = await res.json();
      setUsers(json.categories);
    }
    datalayooooooo();
  }, []);
  return (
    <>
      <h1>List</h1>
      <div className="container">
        {users.map(user => (
          <div className="card" key={user.idCategory}>
            <img src={user.strCategoryThumb} alt={user.strCategory} />
            <h3>{user.strCategory}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;