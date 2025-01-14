import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {setupStore} from "./store/index";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

const container = document.getElementById('root') as Element
const root = ReactDOMClient.createRoot(container)
const store = setupStore();

root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
