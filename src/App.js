import './App.css';
import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
//IMPORT ONMYOJI DISPLAY
import Display from "./Display";
import Shikidisplay from './Shikidisplay'
//IMPORT FORM
import Form from "./Form";

function App() {
  // ============= DEDINING SOME VARIABLES... =============
  const url = "https://onmyoji1207.herokuapp.com"

  const emptyOnmy = {
    name: "Enter Name",
    clan: "Enter Clan",
    level: 1,
    shikigamis: "choose an ID"
  }

  //=============== MAKING SOME STATES... =============
  //MAKE A STATE TO HOLD THE ONMYOJIS. Our API was 1 object with status and an array of Onmyojis. 
  // So set the begining state to empty object
  const [onmyojis, setOnmyojis] = React.useState({})
  const [selectedOnmyoji, setSelectedOnmyoji] = React.useState({})

  // ------  CREATE ROUTE ------
  const handleCreate = async (newOnmyoji) => {
    await fetch(url + '/onmyoji', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newOnmyoji)
    }).then(() => {
      getOnmy();
    });
  }

//function to set selected onmyoji when you clicked on
const selectOnmyoji = (onmyoji) => {
  setSelectedOnmyoji(onmyoji)
}

  // ------ UPDATE ROUTE ------
  const handleUpdate =  (currentOnmy) => {

    fetch(`${url}/onmyoji/${currentOnmy._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentOnmy),
    }).then(() => {
      getOnmy();
    });

  };

  // ------ DELETE ROUTE ------
  const deleteOnmy = (currentOnmy) => {
    fetch(url + "/onmyoji/" + currentOnmy._id, {
      method: "delete"
    })
    .then(() => {
      getOnmy()
    })
  }


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
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Create an Onmyoji</button>
      </Link>

      <div className="main">
        <section>
          <h2>Shikigami List</h2>
          <Shikidisplay />
        </section>
        <Switch>
          <Route 
            exact path="/" 
            render={(rp) => <Display {...rp} onmyoji={onmyojis} selectFuc={selectOnmyoji} delete={deleteOnmy} />} 
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" onmyoji={emptyOnmy} handleSubmit={ handleCreate } />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" onmyoji={selectedOnmyoji} handleSubmit={ handleUpdate } />
            )}
          />
        </Switch>
      </div>      
    </div>
  );
}

export default App;
