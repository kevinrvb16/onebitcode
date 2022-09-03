import Planet from "./planet";
import React from "react";

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}
class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    removeLast = () => {
        let new_Planets = [...this.state.planets]
        new_Planets.pop()
        this.setState(state => ({
            planets: new_Planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
                <hr />
                {this.state.planets.map((planet) =>
                    <Planet
                        link={planet.link}
                        name={planet.name}
                        text={planet.description}
                        img_url={planet.img_url}
                        id_da_lua={planet.id} />
                        )}
            </>
        )
    }
}



export default Planets;