import React from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }
    
    render() {
        return (
            <div>
                { this.props.smurfs.map(smurf => {
                    return <Smurf key={ smurf.id } smurf={ smurf }/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs
    };
};

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList);