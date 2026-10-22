import { useContext, useState } from "react";   

function App(){
    const {user,setuser} = useContext(usercontext);
    const [input,setinput]=useState("");
    return(
        <>
        <p>{user}</p>
        <input type="text" 
        placeholder="Enter text"
        value={input}
        onChange={e=> {
            if(e.key === "Enter") setuser(input);
        }}/>
        <button onClick={_ => {setuser(input)}}click></button>
        </>
    )
}

export default App;