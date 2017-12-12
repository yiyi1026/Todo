import {combineReducers} from 'redux';

import boards from './boards_reducer';
import todos from './todos_reducer';

export default combineReducers({
  boards,
  todos,
});