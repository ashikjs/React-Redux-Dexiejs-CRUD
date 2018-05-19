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
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

fontawesome.library.add(brands, faCheckSquare, faCoffee)

const store = createStore(
    allReducers,
    compose(
      applyMiddleware(thunk)
    ),
  );
//   store.dispatch(loadTodos(LOAD_TODOS));
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
