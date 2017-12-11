export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const RECEIVE_TODO = 'RECEIVE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TODO_ERROR = 'TODO_ERROR'

export const receive_todos = todos => {
  type: RECEIVE_TODOS,
  todos
};

export const receive_todo = todo => {
  type: RECEIVE_TODO,
  todo
};

export const remove_todo = todo => {
  type: REMOVE_TODO,
  todo
};

export const todo_error = todo => {
  type: TODO_ERROR,
  todo
};