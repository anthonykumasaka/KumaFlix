import { combineReducers } from 'redux';

import users from './users_reducer';
import moviesReducer from './movies_reducer'; 
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  movies: moviesReducer
});

export default entitiesReducer; 