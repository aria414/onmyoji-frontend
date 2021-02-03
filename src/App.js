import './App.css';
import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
//IMPORT ONMYOJI DISPLAY
import Display from "./Display";
//IMPORT FORM
import Form from "./Form";

function App() {
  // ============= DEDINING SOME VARIABLES... =============
  const url = "https://onmyoji1207.herokuapp.com"

  const emptyOnmy = {
    name: "Enter Name",
    clan: "Enter Clan",
    level: 1
  }

  //=============== MAKING SOME STATES... =============
  //MAKE A STATE TO HOLD THE ONMYOJIS. Our API was 1 object with status and an array of Onmyojis. 
  // So set the begining state to empty object
  const [onmyojis, setOnmyojis] = React.useState({})

  // ============= USEEFFECT FUNCTION TO GET ONMYOJI DATA =============
  const getOnmy = async () => {
    const response = await fetch(`${url}/onmyoji`);
    const data = await response.json();
    setOnmyojis(data);
  };
  
  // fetch dogs when page loads
  React.useEffect(() => {
    getOnmy()
  }, [])

  console.log("onmyojis state: ", onmyojis)

  return (
    <div className="App">
      <h1>Onmyoji The Game</h1>
      <Display characters={onmyojis} />
      <Form/>
    </div>
  );
}

export default App;
