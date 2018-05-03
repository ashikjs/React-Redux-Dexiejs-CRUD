import React from 'react';
import UserList from './container/user-list';
import UserDetails from './container/user-detail';

export default class User extends React.Component {

    render(){
        return (
            <div>
                <h2>Select a Player</h2>
                <UserList />
                <hr />
                <h2>User Details</h2>
                <UserDetails />
            </div>
        );
    }
}