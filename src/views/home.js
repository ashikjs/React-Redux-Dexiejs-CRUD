import React from 'react';
import DonorAdd from "../components/Smart/DonareContainers/donare"
// import DonorList from "../components/Presentational/donarList"
// import Users from "../components/userlist"
import db from "../db"

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
    }

    componentDidMount(){
        db.donors.add({}).then (function(){
            return db.donors
        })
    }
    
    render() {
        return (
            <div>
                {/* <Users /> */}
                <DonorAdd  />
                <hr />
                {/* <DonarList /> */}
            </div>
        );
    }
}
