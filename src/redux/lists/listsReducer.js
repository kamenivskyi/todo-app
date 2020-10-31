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
        lists: addTodoToTheList({
          arr: state.lists,
          title: payload.title,
          idForTodo: payload.idForTodo,
          listId: payload.listId,
        }),
      }
    };
    default: 
      return state;
  }
};

export default listsReducer;