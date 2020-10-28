import { combineReducers } from 'redux';
import listsReducer from './lists/listsReducer';

export default combineReducers({
  lists: listsReducer
});