import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { setupSocket } from './socket'

const store = configureStore()
setupSocket(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
