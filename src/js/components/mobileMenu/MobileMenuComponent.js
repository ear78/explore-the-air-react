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
                <Link to="Info" onClick={this.handleMenuClose.bind(this)}>Info</Link>
                <Link to="Packages" onClick={this.handleMenuClose.bind(this)}>Packages</Link>
                <Link to="Pictures" onClick={this.handleMenuClose.bind(this)}>Pictures</Link>
                <Link to="Login" onClick={this.handleMenuClose.bind(this)}>Login</Link>
                <Link to="/" onClick={this.handleMenuClose.bind(this)}>Home</Link>
                <img src="./img/etalogo.svg" alt="eta logo"/>
            </div>
        );
    }
}
