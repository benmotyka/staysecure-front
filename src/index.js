import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux"
import {store, persistor} from "app/store"


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 

    <Router>

    <App />
    
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

