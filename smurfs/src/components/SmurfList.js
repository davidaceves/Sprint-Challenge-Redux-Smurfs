import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    state = {
        newSmurf: {
            name: "",
            age: "",
            height: ""
        }
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    };

    handleAddSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.newSmurf);

        this.setState({
            newSmurf: {
                name: "",
                age: "",
                height: ""
            }
        })
    }

    render() {
        return (
            <div>
                <div className="SmurfList">
                    { this.props.smurfs.map(smurf => {
                        return <Smurf key={ smurf.id } smurf={ smurf }/>
                    })}
                </div>
                
                <form onSubmit={ this.handleAddSmurf }>
                    <input
                        type="text"
                        name="name"
                        value={ this.state.newSmurf.name }
                        onChange={ this.handleChange }
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="age"
                        value={ this.state.newSmurf.age }
                        onChange={ this.handleChange }
                        placeholder="age"
                    />
                    <input
                        type="text"
                        name="height"
                        value={ this.state.newSmurf.height }
                        onChange={ this.handleChange }
                        placeholder="height"
                    />
                    <button>
                        Add Smurf
                    </button>
                </form>
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
    { getSmurfs, addSmurf }
)(SmurfList);