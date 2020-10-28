import types from './listsTypes';

export const addNewList = (title) => {
  return {
    type: types.CREATE_NEW_LIST, 
    payload: {
      title,
      id: Math.random(),
      todos: [],
    }
  }
}