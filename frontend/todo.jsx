import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// Testing Start
// import * as APIUtil from './util/session_api_util';
// import { login, logout, signup}  from './util/session_api_util';
// import { login, logout, signup}  from './actions/session_actions';
// import {} from './actions/question_actions';

// Test Ends
// window.login = login;
// window.logout = logout;
// window.signup = signup;
let store;
document.addEventListener('DOMContentLoaded', () => {

  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
  // only do this while developing
  window.store = store;
  // test ends
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

//window.dispatch = store.dispatch;

