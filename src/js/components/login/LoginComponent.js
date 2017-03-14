import React from "react";

import "./logincomponent.css";

export default class LoginComponent extends React.Component {
    render() {
        return (
            <div class="login-container">
                <div class="login-background">
                    <h1>Login To Your Adventure!</h1>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <button type="submit">Login</button>
                    <p>Sign Up</p>
                </div>
            </div>
        );
    }
}
