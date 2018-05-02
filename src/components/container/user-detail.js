import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a Player...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} height="220px"/>
                <h1>{this.props.user.first} {this.props.user.last}</h1>
                <p><b>Nationality:</b> {this.props.user.nationality}</p>
                <p><b>Club:</b> {this.props.user.club}</p>
                <p><b>position:</b> {this.props.user.position}</p>
                <p><b>Age:</b> {this.props.user.age}</p>
                <p><b>Description:</b> {this.props.user.description}</p>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);