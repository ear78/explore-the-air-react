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
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
