import Planet from "./planet";
import React, { useState, useEffect } from "react";
import Form from "./form";
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

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet]);
    }

    return (
        <>
            <h3>Planet List</h3>
            <hr />
            <Form addPlanet={addPlanet}/>
            <hr/>
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