import * as APIUtils from '../util/list_api_util'; 

export const RECEIVE_LIST = "RECEIVE_LIST"; 

export const fetchList = id => dispatch => {
  return APIUtils.fetchList(id)
    .then(
      list => dispatch(receiveList(list))
    ); 
}; 

const receiveList = list => ({
  type: RECEIVE_LIST, 
  list 
}); 