import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from "./reducers"
import Routes from "./route"

const store = createStore(allReducers)
const app = document.getElementById('root');



ReactDOM.render(
    <Router >
        <Provider store={store}>
        <div align="center">
            <Routes />
        </div>
        </Provider>
    </Router>
    , app);
