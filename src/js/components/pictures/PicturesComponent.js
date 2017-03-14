import React from "react";

import "./pictures.css";

export default class Pictures extends React.Component {
    render() {
        return (
            <div class="pictures">
                <h1>ETA Pictures</h1>
                <h5>Picture Perfection</h5>
                <p>
                    <img src="../img/paul-morris-mtn.jpg" alt="mountains"/>
                    <img src="../img/thomas-kelley-ocean.jpg" alt="ocean landscape"/>
                    <img src="../img/tim-trad-truck.jpg" alt="mountains"/>
                    <img src="../img/forrest-cavale-lights.jpg" alt="mountains"/>
                </p>
            </div>
        )
    }
}
