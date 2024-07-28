import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleKey } from '../index'

class Button extends Component {
    render() {
        return (<button style={{ padding: 10, width: 102, margin: 5, borderRadius: 3 }} onClick={() => this.props.handleKey(this.props.keyValue)}>{this.props.keyValue}</button>);
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        handleKey: bindActionCreators(handleKey, dispatch)
    })
)(Button);