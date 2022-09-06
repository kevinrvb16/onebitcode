import React, { useState, useEffect } from "react";
import DescriptionWithLink from "../shared/descriptionWithLink";
import GrayImg from "../shared/img";
import SatellitesForm from "../planet/form";

import { useParams, useNavigate } from "react-router-dom"

const getPlanet = async (id) => {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
};

const Planet = () => {

  let { id } = useParams()
  let navigate = useNavigate()

  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({})
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatellites(data["satellites"]);
      setPlanet(data['data']);
    }, error => {
      navigate('/')
    });
  }, []);

  const goToPlanets = () => {
    navigate('/')
  }

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  }

  let title;
  if (planet.title_with_underline)
    title = (
      <h4>
        <u>{planet.name}</u>
      </h4>
    );
  else title = <h4>{planet.name}</h4>;

  return (
    <div>
      {title}
      <DescriptionWithLink link={planet.link} text={planet.text} />
      <GrayImg img_url={planet.img_url} gray={planet.gray_img} />
      <h4>Satélites</h4>
      <hr/>
      <SatellitesForm addSatellite={addSatellite}/>
      <hr/>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
      <button type="button" onClick={goToPlanets}>Voltar a listagem</button>
    </div>
  );
};
export default Planet;
