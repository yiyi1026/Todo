import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// Testing Start
import { 
  receiveTodo, 
  receiveTodos, 
  removeTodo,
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TODO_ERROR

} from './actions/todo_actions';
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
window.dispatch = store.dispatch;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
// test ends

const root = document.getElementById('root');
ReactDOM.render(<Root store={store} />, root);
});





