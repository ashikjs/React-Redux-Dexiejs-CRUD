import React from 'react';
import DonarAdd from "../components/Smart/DonareContainers/donare"
import DonarList from "../components/Presentational/donarList"
import Users from "../components/userlist"
import db from "../db"

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    componentDidMount(){
        db.donars.add({}).then (function(){
            //
            // Then when data is stored, read from it
            //
            return db.donars
        })
    }
    
    render() {
        return (
            <div>
                {/* <Users /> */}
                <DonarAdd  />
                <hr />
                <DonarList />
            </div>
        );
    }
}
