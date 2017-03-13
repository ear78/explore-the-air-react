import React from "react";
import {Link} from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        
        <div>
            <Link to="Info">info</Link>
            <Link to="Packages">packages</Link>
            <Link to="Pictures">pictures</Link>

            {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}
