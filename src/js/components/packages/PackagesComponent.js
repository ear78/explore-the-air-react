import React from "react";
import { Link } from "react-router";

import "./packages.css";

import SignUpButtonComponent from "../signupbuttoncomponent/SignUpButtonComponent.js";

export default class Packages extends React.Component {
    render() {
        return (
            <div class="packages">
                <h1>Air Packages</h1>
                <h5>One Trip At A Time</h5>
                <p>Four loko eu butcher paleo, post-ironic synth esse heirloom lomo slow-carb. DIY meggings sustainable, pickled godard hashtag kinfolk microdosing ullamco nihil biodiesel velit. Hella dreamcatcher occupy excepteur, meggings live-edge chicharrones. Sint seitan mixtape, you probably havent heard of them health goth knausgaard etsy. Nostrud gluten-free meditation fingerstache. Kale chips pop-up pariatur kickstarter offal, neutra 3 wolf moon meh chicharrones eiusmod. Hoodie williamsburg wolf umami enim.</p>
                <Link to="packages/package1">package 1</Link>
                <Link to="packages/package2">package 2</Link>
                <Link to="packages/package3">package 3</Link>
                <SignUpButtonComponent />
            </div>
        )
    }
}
