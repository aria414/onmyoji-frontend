import React from "react";
import './App.css';

const Shikidisplay = (props) => {
    const url = "https://onmyoji1207.herokuapp.com"
    const [shikigamis, setShikigamis] = React.useState(null)

    const getShiki = async () => {
        const response = await fetch(`${url}/shiki`);
        const data = await response.json();
        setShikigamis(data);
      };

      React.useEffect(() => {
        getShiki()
      }, [])

    console.log("Shiki display: ", shikigamis)

    const loaded = () => {
        const allShikis = shikigamis.map ( (shiki) => {
          return <p key={shiki._id}> Shiki Name: {shiki.name} Shiki ID: {shiki._id}</p>
        })
        return(
            <div className="main">
               {allShikis}
            </div>
        )
     }
      const loading = () => {
        return <p>Loading Shikigami List...</p>
      }
    
      return shikigamis ? loaded() : loading()

    //return <h2>Testing Shiki disaply...</h2>
}

export default Shikidisplay