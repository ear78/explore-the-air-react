import React from "react";
import { Link } from "react-router";

import "./signupbuttoncomponent.css";

export default class SignUpButtonComponent extends React.Component {
    render(){
        return(
            <Link to="Login" class="signup-button"><button>Sign Up</button></Link>
        )
    }
}
