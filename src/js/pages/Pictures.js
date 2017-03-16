import React from "react";

import PicturesComponent from "../components/pictures/PicturesComponent.js";

export default class Pictures extends React.Component {
    constructor(){
        super();
        this.state = {
            image: ["../../img/forrest-cavale-lights.jpg", "../../img/paul-morris-mtn.jpg", "../../img/thomas-kelley-ocean.jpg", "../../img/tim-trad-truck.jpg", "../../img/sean-afnan-waterfall.jpg", "../../img/alan-hurt-jr-peru.jpg", "../../img/jan-erik-waider-iceland.jpg", "../../img/joshua-earle-hiker.jpg"]
        }
    }

    render() {
        return (
            <div>
                <PicturesComponent image={this.state.image} />
            </div>
        )
    }
}
