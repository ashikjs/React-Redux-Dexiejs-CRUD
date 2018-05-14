import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
import allReducers from "./reducers"
import Routes from "./route"
import {addDonare} from './actions/index'
// const store = createStore(allReducers)
const initialState = {
    todos: [],
  };

const store = createStore(
    allReducers,
    // initialState,
    compose(
      applyMiddleware(thunk)
    ),
  );

const app = document.getElementById('root');

ReactDOM.render(
    <Router >
        <Provider store={store}>
        <div>
            <Routes />
        </div>
        </Provider>
    </Router>
    , app);
