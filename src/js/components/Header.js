import React from "react";


export default class Header extends React.Component {


  render() {
    return (
      <header class="main-header">
        <div>
            <i class="material-icons">menu</i>
        </div>
        <div>
            <button>Login</button>
        </div>
      </header>
    );
  }
}
