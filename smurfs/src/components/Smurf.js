import React from "react";

class Smurf extends React.Component {
    render() {
        return (
            <div className="Smurf">
                <p>Name: { this.props.smurf.name }</p>
                <p>Age: {this.props.smurf.age }</p>
                <p>Height: {this.props.smurf.height }</p>
            </div>
        )
    }
}

export default Smurf;