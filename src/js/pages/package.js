import React from "react";



export default class Package extends React.Component {
    render(){
        return (
            <div>
                {this.props.params.package}
            </div>
        )
    }
}
