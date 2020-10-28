import listsTypes from "./listsTypes";

const initialState = {
  lists: [],
}

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case listsTypes.CREATE_NEW_LIST: 
      return { 
        ...state,
        lists: [...state.lists, action.payload],
      };
      
    default: 
      return state;
  }
};

export default listsReducer;