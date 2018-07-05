// Base React
import React from 'react';
import ReactDOM from 'react-dom';

// Base Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Thunk
import thunkMiddleware from 'redux-thunk';

import { mainReducer } from './Reducers/Main.example';
import Page from './Components/Page.example';
import './index.css';
// Mas Thunk
var store = createStore(
    mainReducer,
    applyMiddleware(thunkMiddleware)
);
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Page dispatch={store.dispatch} state={store.getState()} />
        </Provider>,
        document.getElementById('root')
    );
};
store.subscribe(render);

render();
