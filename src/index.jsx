// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from "redux-logger";
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

//import reducer
import channelsReducer from './reducers/channels-reducer';
import selectedChannelReducer from './reducers/selected-channel-reducer';
import messagesReducer from './reducers/messages-reducer';

// State and reducers
const reducers = combineReducers( {
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
