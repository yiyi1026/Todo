// this file will keep track of all error information.
import {combineReducers} from 'redux';

import session from './session_errors_reducer';

export default combineReducers({
  session
});