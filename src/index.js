import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'


import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename='/' >
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
