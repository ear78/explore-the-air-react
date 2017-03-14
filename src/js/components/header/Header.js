import React from "react";

import "./header.css";

export default class Header extends React.Component {


  render() {
    return (
      <header class="main-header">
        <div class="hambuger-container">
            <i class="material-icons">menu</i>
        </div>
        <div>
            <button>Login</button>
        </div>
      </header>
    );
  }
}
