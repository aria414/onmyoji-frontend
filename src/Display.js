import React from "react";
import './App.css';

const Display = (props) => {
    //Destructuring... The props passed in was characters. 
    // But characters is an object with status and onmyojis array... 
    //  props.characters = {status: 200, onmyojis: [...]} -- So destructure some more...
    const {onmyojis} = props.characters
    console.log("Display.js - ", onmyojis)

    const loaded = () => {
        const allOnmyojis = onmyojis.map ( (onmy) => {
            
            const allShikis = onmy.shikigamis.map( (shiki) => {
                return (
                    <ul key={shiki._id} > 
                      <li>{shiki.name}</li>
                    </ul>
                )
            })
            console.log("onmyoji shikis: ", allShikis)

            return (   
                <article key = {onmy._id} className="onmyoji">
                    <h2>Name: {onmy.name}</h2>
                    <h2>Clan: {onmy.clan}</h2>
                    <h2>Level: {onmy.level}</h2>
                    <h2>Shikigamis List: </h2>
                    {allShikis}      
                </article>
            )
        }) // ----- end of mapping func --------
        return(
            <div className="main">
                <h2>Displaying all Onmyojis....</h2>
                {allOnmyojis}
            </div>
        )
    } // ----------- end of loaded() -----------


    const loading = () => {
        return <h1>Page loading...</h1>;
    }
    
    return onmyojis ? loaded() : loading()
}

export default Display