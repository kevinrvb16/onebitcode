import React, { useState, useEffect } from "react";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import GrayImg from "../../shared/img";

const getSatellites = async (id_da_lua) => {
  let response = await fetch(`http://localhost:3000/api/${id_da_lua}.json`);
  let data = await response.json();
  return data;
};

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id_da_lua).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;
  return (
    <div>
      {title}
      <DescriptionWithLink link={props.link} text={props.text} />
      <GrayImg img_url={props.img_url} gray={props.gray_img} />
      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
export default Planet;
