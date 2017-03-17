import React from "react";

import "./logincomponent.css";

import SignUpButtonComponent from "../signupbuttoncomponent/SignUpButtonComponent.js";

export default class LoginComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
        }
    }

    onChange(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div class="login-container">
                <h1>Login To ETA</h1>
                <h5>Track Your Adventures</h5>
                <div class="login-background">
                    <form>
                    <input type="text" placeholder="User Name" name="username" onChange={this.onChange.bind(this)}/>
                    <input type="password" placeholder="Password" password="password"/>
                    <p>Have An Account? Sign Up Below!</p>
                    <button type="submit">Login</button>
                    <SignUpButtonComponent />
                    </form>
                </div>

            </div>
        );
    }
}
