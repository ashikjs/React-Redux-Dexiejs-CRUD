import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import allReducers from "./reducers"
import Routes from "./route"
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faUser  from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(brands,faUser)

const store = createStore(
    allReducers,
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
