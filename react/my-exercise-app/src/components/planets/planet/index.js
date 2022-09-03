import React from "react";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import GrayImg from "../../shared/img";

const getSatellites = async (id_da_lua) => {
    let response = await fetch(`http://localhost:3000/api/${id_da_lua}.json`);
    let data = await response.json();
    return data;
}
class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satellites: [],
        }
    }

    componentDidMount(){
        getSatellites(this.props.id_da_lua).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }
    render() {
        let title;
    if (this.props.title_with_underline)
        title = <h4><u>{this.props.name}</u></h4>
    else
        title = <h4>{this.props.name}</h4>
    return (
        <div>
            {title}
            <DescriptionWithLink link={this.props.link} text={this.props.text}/>
            <GrayImg img_url={this.props.img_url} gray={this.props.gray_img} />
            {this.state.satellites.map((satellite) => <h5>{satellite.name}</h5>)}
            <hr/>
        </div>
    )
    }
}
export default Planet;