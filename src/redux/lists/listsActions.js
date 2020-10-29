import types from './listsTypes';

const generateSting = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const addNewList = (title) => {
  return {
    type: types.CREATE_NEW_LIST, 
    payload: {
      title,
      id: generateSting(),
      todos: [],
    }
  }
}

export const getList = (id) => ({
  type: types.GET_EXISTING_LIST,
  payload: id,
})