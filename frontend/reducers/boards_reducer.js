import { 
  RECEIVE_BOARD,
  REMOVE_BOARD,
  BOARD_ERROR
} from '../actions/board_actions';

import merge from 'lodash/merge';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {

    case RECEIVE_BOARD:
      const newBoard = {[action.board.id]: action.board};
      return merge({}, state, newBoard);
    case REMOVE_BOARD:
      nextState = merge({}, state);
      delete nextState[action.board.id];
      return nextState;
    case BOARD_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default boardsReducer;