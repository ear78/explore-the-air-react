import React from "react";

import PackagesComponent from "../components/packages/PackagesComponent.js";

export default class Packages extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <PackagesComponent />
            </div>
        )
    }
}
