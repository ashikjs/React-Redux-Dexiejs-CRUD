import React from 'react';
import Users from "../components/userlist"
import db from "../db"

export default class Home extends React.Component {

    componentDidMount(){
        console.log('start db');
        db.table('players')
        .toArray()
        .then((todos) => {
          this.setState({ todos });
        });
    }
    render() {
        return (
            <div>
                <Users />
            </div>
        );
    }
}
