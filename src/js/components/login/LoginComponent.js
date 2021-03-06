import React from "react";

import "./logincomponent.css";

import SignUpButtonComponent from "../signupbuttoncomponent/SignUpButtonComponent.js";

export default class LoginComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        alert('this was submitted! Thank you!')
    }

    render() {
        return (
            <div class="login-container">
                <h1>Login To ETA</h1>
                <h5>Track Your Adventures</h5>
                <div class="login-background">
                    <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" placeholder="User Name" value={this.state.username}
                    onChange={this.onChange.bind(this)}
                    name="username" />
                    <input type="password" placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)} name="password"/>
                    <p>Have An Account? Sign Up Below!</p>
                    <button type="submit">Login</button>
                    <SignUpButtonComponent />
                    </form>
                </div>

            </div>
        );
    }
}
