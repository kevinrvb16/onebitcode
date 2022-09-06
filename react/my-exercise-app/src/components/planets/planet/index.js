import DescriptionWithLink from "../../shared/descriptionWithLink";
import GrayImg from "../../shared/img";
import { Link } from 'react-router-dom'
const Planet = (props) => {

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
      <Link to={`planet/${props.id_da_lua}`}>
        {title}
      </Link>
      <DescriptionWithLink link={props.link} text={props.text} />
      <GrayImg img_url={props.img_url} gray={props.gray_img} />
    </div>
  );
};
export default Planet;
