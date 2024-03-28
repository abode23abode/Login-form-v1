import React from "react";
import Login from "./login"
let loggidIN=false;
let registered=false;


function App() {
  if(registered){
    return (
      <div className="container"> {loggidIN ? <h1>Hello</h1> : <Login/>}</div>
   );
  }else{
  return ( <div className="container"> {registered ? <Login/> :  <Login registered="true" /> }</div>);
  }
}

export default App;
//Ternary
    //<div className="container"> {loggidIN ? <h1>Hello</h1> : <Login/>}</div>
    //And
{/* <div className="container">{ currentTime>7&&<h1>Why are you working !</h1>}</div> */}