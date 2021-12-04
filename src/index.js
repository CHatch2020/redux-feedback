import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return action.payload;
    }
    return state;
}

const understandReducer = (state = [], action) => {
    return state;
}

const supportReducer = (state = [], action) => {
    return state;
}

const commentReducer = (state = [], action) => {
    return state;
}

const storeInstance = createStore(
    combineReducers({
        // Reducers here
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(
        logger
    )
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
