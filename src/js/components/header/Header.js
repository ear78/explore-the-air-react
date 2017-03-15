import React from "react";
import { Link } from "react-router";

import "./header.css";

import MobileMenuComponent from "../mobilemenu/MobileMenuComponent.js";

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: 'mobile-menu'
        }
    }

    handleClickOpenMenu(){
        this.setState({
            showMenu: 'mobile-menu active'
        })
    }

    hideMenu(){
        this.setState({
            showMenu: 'mobile-menu'
        })
    }

  render() {
    return (
      <header class="main-header">
        <div onClick={this.handleClickOpenMenu.bind(this)} class="hambuger-container">
            <i class="material-icons">menu</i>
        </div>
        <div>
            <Link to="Login"><button>Login</button></Link>
        </div>


        <MobileMenuComponent showMenu={this.state.showMenu} hideMenu={this.hideMenu.bind(this)}/>
      </header>
    );
  }
}

// mobile menu component at the bottom
