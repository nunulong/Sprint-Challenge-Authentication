import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import Thunk from 'redux-thunk';
import { USER_AUTHENTICATED } from './actions';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = window.localStorage.getItem('token');
if (token) {
  store.dispatch({ type: USER_AUTHENTICATED });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >, document.getElementById('root'));
registerServiceWorker();
