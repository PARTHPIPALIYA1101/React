// import { useState,useReducer } from "react";
// function App() {
//   const [counter,dispatch] = useReducer(reducerFn,0);
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
//       <button onClick={()=>dispatch({type:"INC"})}>Add</button>
//       <br />
//       <button onClick={()=>dispatch({type:"DEC"})}>Remove</button>
//     </>
//   )
// }

// export default App;
// import Card from "./components/Card"
// function App(){
//   return(
//     <>
//     <Card name="Parth" age={19}/>
//     </>
//   )
// }

// function Login({children,l}) {
//   return (
//     <>
//       {l===true ? children:<h1>Failed</h1>}
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Login l={true}>
//         <h1>Login done</h1>
//       </Login>
//     </>
//   );
// }

// import { useState } from "react"

// function App(){
//   const [buy,setbuy] = useState(5);
//   const [pending,setpending] = useState(0);

//   function addval(){
//     setbuy(buy - 1);
//     setpending(pending + 1)
//     setTimeout(() => {
//       setpending(p => p - 1)
//     }, 3000)
//   }
//   return(
//     <>
//       <button onClick={addval}>Add</button>
//       <h1>remaing {buy}</h1>
//       <h1>pending {pending}</h1>

//     </>
//   )
// }
// export default App

// import { useState } from "react";

// function App(){
//   const [color,setColor] =useState("red")
//   let boo=true;
//   function changeColor(){
//     if(boo){
//       setColor("lightblue");
//       boo=false;
//     }else{
//       setColor("red");
//       boo=true;
//     }
//   }
//   return(
//     <> 
//     <button onClick={changeColor} style={{ backgroundColor: color }}>
//         color
//       </button>
//     </>
//   )
// }

// export default App;

// import { useState } from "react";

// function App(){
//   function Add({q,children}){
//     const [show,setshow] = useState(false);
//     return(
//       <>
//         <h1>{q}</h1>
//         <button onClick={(()=> setshow(!show))}>see</button>
//         {show ? children : null}
//       </>
//     )
//   }
//   return(
//     <>
//       <Add q="Capital of India">

//         <h3>Delhi</h3>
//       </Add>
//       <Add q="Capital of Gujarat">

//         <h3>Gandhinagar</h3>
//       </Add>
//     </>
//   )
// }

// export default App;

// import { useState } from "react";
// function App(){
//   let images = [
//     {
//   name: 'Homenaje a la Neurocirugía',
//   artist: 'Marta Colvin Andrade',
//   description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
//   url: 'https://react.dev/images/docs/scientists/Mx7dA2Y.jpg',
//   alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
// }, {
//   name: 'Floralis Genérica',
//   artist: 'Eduardo Catalano',
//   description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
//   url: 'https://react.dev/images/docs/scientists/ZF6s192m.jpg',
//   alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
// }, {
//   name: 'Eternal Presence',
//   artist: 'John Woodrow Wilson',
//   description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//   url: 'https://react.dev/images/docs/scientists/aTtVpES.jpg',
//   alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
// }, {
//   name: 'Moai',
//   artist: 'Unknown Artist',
//   description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
//   url: 'https://react.dev/images/docs/scientists/RCwLEoQm.jpg',
//   alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
// }, {
//   name: 'Blue Nana',
//   artist: 'Niki de Saint Phalle',
//   description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
//   url: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
//   alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
// }, {
//   name: 'Ultimate Form',
//   artist: 'Barbara Hepworth',
//   description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
//   url: 'https://react.dev/images/docs/scientists/2heNQDcm.jpg',
//   alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
// }, {
//   name: 'Cavaliere',
//   artist: 'Lamidi Olonade Fakeye',
//   description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//   url: 'https://react.dev/images/docs/scientists/wIdGuZwm.png',
//   alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
// }, {
//   name: 'Big Bellies',
//   artist: 'Alina Szapocznikow',
//   description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//   url: 'https://react.dev/images/docs/scientists/AlHTAdDm.jpg',
//   alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
// }
// ]
//   const [img,setimg] = useState(0);

//   function nextimg(){
//     setimg((img+1) % images.length)
//   }

//   function previmg(){
//     setimg((img-1 + images.length) % images.length)
//   }
//   return(
//     <>
//     <button onClick={nextimg}>next</button>
//     <button onClick={previmg}>prev</button>
//     <img src={images[img].url} alt={images[img].alt}/>
//     </>
//   )
// }

// export default App;


// import { useState } from "react";

// function App(){
//   const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
// }];
//   const nonc = people.filter(person => person.profession !== 'chemist');
  
  
//   return(
//     <>
//     <ul>
//       {nonc.forEach(person => {
//         <li>person.name</li>
//       })
//       }
//     </ul>
//     </>
//   )
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function App(){
//   function Home() {
//     return <h1>This is Home</h1>;
//   }
//   function About(){
//     return(
//       <>
//       <h1>This is about</h1>
//       </>
//     )
//   }
//   function Contact(){
//     return(
//       <>
//       <h1>This is Contect</h1>
//       </>
//     )
//   }
//   return(
//   <>
//   <BrowserRouter>
//   <div>
//     <div className="nav">
//       <Link to="/">Home</Link> {"|"}
//       <Link to="/about">About</Link> {"|"}
//       <Link to="/contact">Contact</Link>
//     </div>
//     <div className="body"></div>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//       </Routes>
//     <div className="footer">
//       <p>This is Footer</p>
//     </div>
//   </div>
//   </BrowserRouter>
//   </>
//   )
// }

// export default App;

import { useContext, useState } from "react";   
import {UserContext} from "./comp/user";

function App(){
    const {user,setuser} = useContext(UserContext);
    const [input,setinput]=useState("");
    return(
        <>
        <h1>{user}</h1>
        <input type="text" 
        placeholder="Enter text"
        value={input}
        onChange={e=> setinput(e.target.value)}/>
        <button onClick={ _ => setuser(input) }>click</button>
        </>
    )
}

export default App;