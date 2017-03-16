import React from "react";

import Package1 from "../components/package1/Package1.js";

export default class Package extends React.Component {
    render(){
        return (
            <div>
                <Package1 />
                {this.props.params.package}
            </div>
        )
    }
}
