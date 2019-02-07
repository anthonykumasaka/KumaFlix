import { RECEIVE_LIST_ITEM, RECEIVE_LIST_ITEMS, REMOVE_LIST_ITEM} from '../actions/list_items_actions'; 
import merge from 'lodash/merge'; 

const listItemsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_LIST_ITEMS: 
            return action.list_items; 
        case RECEIVE_LIST_ITEM: 
            return merge({}, state, {[action.list_item.id]: action.list_item}); 
        case REMOVE_LIST_ITEM: 
            let newState = merge({}, state, {});
            delete newState[action.id]; 
            return newState; 
        default:
            return state;
    }
}; 

export default listItemsReducer; 