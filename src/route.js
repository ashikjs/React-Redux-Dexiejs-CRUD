import React from 'react';
import {Route} from 'react-router'
import Donor from "../src/views/donor"

export default class Routes extends React.Component {
    render(){
        return (
            <div>
                <Route exact path="/" component={Donor}/>
            </div>
        );
    }
}
