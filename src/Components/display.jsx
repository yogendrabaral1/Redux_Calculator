import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div style={{ width: 440, padding: 20, margin: "auto", display: "block", border: "1px solid black" }}>{this.props.display}</div>
            </div>
        );
    }
}

export default connect(
    state => ({ display: state.evalReducer.display }),
    dispatch => ({})
)(Display);