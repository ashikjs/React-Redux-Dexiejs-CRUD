import React from 'react';
import Donor from "../components/Smart/DonorContainers/donor"
import db from "../db"

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { };
    }

    componentDidMount(){
        // db.donors.add({}).then (function(){
        //     return db.donors
        // })
    }
    
    render() {
        return (
            <div>
                <Donor />
                <hr />
            </div>
        );
    }
}
