import types from "./listsTypes";
import { addTodoToTheList, getExistingList } from "./listUtils";

const initialState = {
  lists: [],
  currentList: {},
};

const listsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_NEW_LIST: 
      return { 
        ...state,
        lists: [...state.lists, payload],
      };
    case types.GET_EXISTING_LIST:
      return {
        ...state,
        currentList: getExistingList(state.lists, payload),
      };
    case types.ADD_TODO_TO_THE_LIST: {    
      return {
        ...state,
        lists: addTodoToTheList(state.lists, payload.title, payload.id),
      }
    }
    default: 
      return state;
  }
};

export default listsReducer;