import './style.css';
const GrayImg = (props) => {
    return (
        <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} alt="Mercúrio"></img>
    )
}

export default GrayImg;