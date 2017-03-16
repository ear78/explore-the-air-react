import React from "react";
import { Link } from "react-router";

import "./pictures.css";

export default class Pictures extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div class="pictures">
                <h1>ETA Pictures</h1>
                <h5>Picture Perfection</h5>
                <div>
                    <img src={this.props.image[1]} alt="mountains"/>
                    <img src={this.props.image[2]} alt="ocean landscape"/>
                    <img src={this.props.image[3]} alt="mountains"/>
                    <img src={this.props.image[0]} alt="mountains"/>
                    <img src={this.props.image[4]} alt="mountains"/>
                    <img src={this.props.image[5]} alt="mountains"/>
                    <img src={this.props.image[6]} alt="mountains"/>
                    <img src={this.props.image[7]} alt="mountains"/>
                </div>
                <Link to="Login"><p>Like what you see? Sign Up</p></Link>
            </div>
        )
    }
}
