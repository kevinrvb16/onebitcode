import { useState } from "react";

const SatellitesForm = (props) => {
    const initialState = {
        name : ''
    }
    let [satellite, setSatellite] = useState(initialState);

    const handleAppendSatellite = (e) => {
        setSatellite({
            name: e.currentTarget.value
        })
    }
    const handleSubmit = (e) => {
        props.addSatellite(satellite)
        e.preventDefault();
        setSatellite(initialState)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="satellite">Adicionar Satélite: </label>
                <input name="satellite" id="satellite" type="text" value={satellite.name} onChange={handleAppendSatellite}/>
            </div>
            <br/>
            <input type="submit"/>
        </form>
    )
}

export default SatellitesForm