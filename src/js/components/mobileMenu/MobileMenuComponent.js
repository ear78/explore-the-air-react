import React from "react";
import { Link } from "react-router";

import "./mobilemenu.css";

export default class MobileMenuComponent extends React.Component {

    handleMenuClose(){
        this.props.hideMenu();
    }

    render() {
        return (
            <div class={this.props.showMenu}>
                <i class="material-icons" onClick={this.handleMenuClose.bind(this)}>close</i>
                <Link to="Info">Info</Link>
                <Link to="Packages">Packages</Link>
                <Link to="Pictures">Pictures</Link>
                <Link to="Login">Login</Link>
                <img src="./img/etalogo.svg" alt="eta logo"/>
            </div>
        );
    }
}
