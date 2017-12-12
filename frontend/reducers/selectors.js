// transform objects to arrays

export const allTodos = ({todos}) => Object.keys(todos).map(id => todos[id]);