import types from './listsTypes';

const generateSting = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const addNewList = (title) => ({
  type: types.CREATE_NEW_LIST, 
  payload: {
    title,
    id: generateSting(),
    todos: [],
  }
});

export const getListById = (id) => ({
  type: types.GET_EXISTING_LIST,
  payload: id,
});

export const addTodoToTheList = (title, listId) => ({
  type: types.ADD_TODO_TO_THE_LIST,
  payload: { title, listId, idForTodo: Math.random() },
});