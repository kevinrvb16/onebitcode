import { useState } from "react";

const SatellitesForm = (props) => {
    let [satellite, setSatellite] = useState({
        name: ""
    });

    const handleAppendSatellite = (e) => {
        setSatellite({
            name: e.currentTarget.value
        })
    }
    const handleSubmit = (e) => {
        props.addSatellite(satellite)
        console.log(satellite);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="satellite">Adicionar Satélite: </label>
                <input name="satellite" id="satellite" onChange={handleAppendSatellite}></input>
            </div>
            <br/>
            <input type="submit"/>
        </form>
    )
}

export default SatellitesForm