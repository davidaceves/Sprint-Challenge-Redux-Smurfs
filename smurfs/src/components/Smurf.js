import React from "react";
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

class Smurf extends React.Component {

    handleDeleteSmurf = () => {
        const { id } = this.props.smurf;
        this.props.deleteSmurf(id);
    }

    render() {
        return (
            <div className="Smurf">
                <p>Name: { this.props.smurf.name }</p>
                <p>Age: {this.props.smurf.age }</p>
                <p>Height: {this.props.smurf.height }</p>
                <button onClick={ this.handleDeleteSmurf }>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        deletingSmurf: state.deleteSmurf
    };
};

export default connect(
    mapStateToProps,
    { deleteSmurf }
)(Smurf);