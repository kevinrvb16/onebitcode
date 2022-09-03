import Planet from "./planet";
import React, { useState, useEffect } from "react";

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}
/* componentDidMount() {
    getPlanets().then(data => {
        setState(state => ({
            planets: data['planets']
        }))
    })
} */

const Planets = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets']);
        })
    }, [])
    const removeLast = () => {
        let new_Planets = [...planets];
        new_Planets.pop();
        setPlanets(new_Planets);
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1];
        
        setPlanets([...planets, last_planet]);
    }

    return (
        <>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLastPlanet}>Duplicate Last</button>
            <hr />
            {planets.map((planet, index ) =>
                <Planet
                    link={planet.link}
                    name={planet.name}
                    text={planet.description}
                    img_url={planet.img_url}
                    id_da_lua={planet.id}
                    key={index} />
            )}
        </>
    )
}



export default Planets;