import React from "react";
import ReactDOM from 'react-dom/client'
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducer } from "./reducers/reducer";
import { fetchTodos } from "./actions/action";

const store = configureStore(reducer, fetchTodos, applyMiddleware(thunk))

const root = document.getElementById('root')
let DOM

if (root) {
    DOM = ReactDOM.createRoot(root)
}

if (DOM) {
    DOM.render(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}