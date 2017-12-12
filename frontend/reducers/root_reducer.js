import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import todosReducer from './todos_reducer';
import boardsReducer from './boards_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,

  boards: boardsReducer,
  // todolists: todolistsReducer,
  todos: todosReducer
  // ,errors: errorsReducer
});

export default rootReducer;
