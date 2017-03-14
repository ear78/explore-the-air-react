import React from "react";
import { Link } from "react-router";

import "./mobilemenu.css";

export default class MobileMenuComponent extends React.Component {
    render() {
        return (
            <div class="mobile-menu">
                <Link to="Info">Info</Link>
                <Link to="Packages">Packages</Link>
                <Link to="Pictures">Pictures</Link>
                <Link to="Login">Login</Link>
            </div>
        );
    }
}
