import React from 'react';
import {Route} from 'react-router'

// All Pages Call
import Home from "../src/views/homePage"

export default class Routes extends React.Component {

    render(){
        return (
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        );
    }
}
