export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const BOARD_ERROR = 'BOARD_ERROR'

export const receive_board = board => {
  type: RECEIVE_BOARD,
  board
};

export const remove_board = board => {
  type: REMOVE_BOARD,
  board
};

export const board_error = board => {
  type: BOARD_ERROR,
  board
};