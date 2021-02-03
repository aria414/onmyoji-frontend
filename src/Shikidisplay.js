import React from "react";
import './App.css';

const Shikidisplay = (props) => {
    const data = props.shikigamis

     console.log("Shiki display: ",data)

    // const loaded = () => {
    //     const allShikis = data.map ( (shiki) => {
    //       return <p key={shiki._id}> Shiki Name: {shiki.name} Shiki ID: {shiki._id}</p>
    //     })
    //   }
    //   const loading = () => {
    //     return <p>Loading Shikigami List...</p>
    //   }
    
    //   return data ? loaded() : loading()

    return <h2>Testing Shiki disaply...</h2>
}

export default Shikidisplay