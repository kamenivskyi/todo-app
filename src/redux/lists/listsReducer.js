import types from "./listsTypes";

const initialState = {
  lists: [],
  listElement: {},
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NEW_LIST: 
      return { 
        ...state,
        lists: [...state.lists, action.payload],
      };
    case types.GET_EXISTING_LIST:
      return {
        ...state,
        listElement: state.lists.find(list => list.id === action.payload),
      };
      
    default: 
      return state;
  }
};

export default listsReducer;