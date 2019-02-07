import { RECEIVE_LIST } from '../actions/lists_actions'; 
import merge from 'lodash/merge'; 

const listsReducer = (state = {}, action) => {
  Object.freeze(state); 
  switch(action.type){
    case RECEIVE_LIST: 
      return merge({}, state, { [action.list.id]: action.list }); 
    default: 
      return state; 
  }
}; 

export default listsReducer; 