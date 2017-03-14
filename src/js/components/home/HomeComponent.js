import React from "react";

import "./homecomponent.css";

export default class HomeComponent extends React.Component {
    render() {
        return (
            <section class="home">
                <h1>Explore The Air</h1>
                <h5>One Airport At A Time</h5>
                <img src="./img/etalogo.svg" alt="eta logo"/>
            </section>
        )
    }
}
