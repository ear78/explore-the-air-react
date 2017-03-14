import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div class="login-container">
                <div class="login-background">
                    <h1>this is the Login page!</h1>
                    <input type="text" value="Name"/>
                    <input type="email" value="Email"/>
                    <button type="submit">Login</button>
                </div>
            </div>
        );
    }
}
