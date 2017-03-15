import React from "react";

import "./logincomponent.css";

import SignUpButtonComponent from "../signupbuttoncomponent/SignUpButtonComponent.js";

export default class LoginComponent extends React.Component {
    render() {
        return (
            <div class="login-container">
                <h1>Login To ETA</h1>
                <h5>Track Your Adventures</h5>
                <div class="login-background">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <p>Have An Account? Sign Up Below!</p>
                    <button type="submit">Login</button>
                    <SignUpButtonComponent />
                </div>

            </div>
        );
    }
}
