import React from "react";
import { Link } from "react-router";

import "./header.css";

export default class Header extends React.Component {


  render() {
    return (
      <header class="main-header">
        <div class="hambuger-container">
            <i class="material-icons">menu</i>
        </div>
        <div>
            <Link to="Login"><button>Login</button></Link>
        </div>
      </header>
    );
  }
}
