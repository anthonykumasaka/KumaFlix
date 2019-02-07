import { combineReducers } from 'redux';
import users from './users_reducer';
import moviesReducer from './movies_reducer'; 
import usersReducer from './users_reducer';
import listsReducer from './list_items_reducer'; 
import listItemsReducer from './list_items_reducer'; 

const entitiesReducer = combineReducers({
  users: usersReducer, 
  movies: moviesReducer, 
  lists: listsReducer, 
  list_items: listItemsReducer
});

export default entitiesReducer; 