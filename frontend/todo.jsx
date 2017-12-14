//React
import React from 'react';
import ReactDOM from 'react-dom';

//components
import Root from './components/root';
import configureStore from './store/store';

// Testing Starts
import { 
  receiveTodo, 
  receiveTodos, 
  removeTodo,
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TODO_ERROR

} from './actions/todo_actions';
import { login, logout, signup}  from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signup = signup;
// testing ends


// import * as APIUtil from './util/session_api_util';
// import { login, logout, signup}  from './util/session_api_util';

// Test Ends
let store;
document.addEventListener('DOMContentLoaded', () => {

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
// testing starts
window.getState = store.getState;
window.dispatch = store.dispatch;
// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
// window.removeTodo = removeTodo;
// testing ends

const root = document.getElementById('root');
ReactDOM.render(<Root store={store} />, root);
});





