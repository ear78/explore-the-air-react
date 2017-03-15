import React from "react";
import {Link} from "react-router";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";


export default class Layout extends React.Component {

    navigate(){
        this.props.history.pushState(null, "/");
    }

  render() {
    return (
      <div>
        <Header />
        <div>
            <Link to="Info">info</Link>
            <Link to="Packages">packages</Link>
            <Link to="Pictures">pictures</Link>
            <Link to="Login">Login</Link>
            <button onClick={this.navigate.bind(this)}>Home</button>
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
