import * as APIUtils from '../util/list_item_api_util';

export const RECEIVE_LIST_ITEMS = "RECEIVE_LIST_ITEMS";
export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export const fetchListItems = () => dispatch => {
  return APIUtils.fetchListItems()
  .then(
    list_items => dispatch(receiveListItems(list_items))
  );
};

const receiveListItems = list_items => ({
  type: RECEIVE_LIST_ITEMS,
  list_items
});

export const fetchListItem = (id) => dispatch => {
  return APIUtils.fetchListItem(id)
  .then(
    list_item => dispatch(receiveListItem(list_item))
  );
};

const receiveListItem = list_item => ({
  type: RECEIVE_LIST_ITEM,
  list_item
});

export const createListItem = data => dispatch => {
  return APIUtils.createListItem(data)
  .then(
      list_item => dispatch(receiveListItem(list_item))
    );
};

export const deleteListItem = id => dispatch => {
  return APIUtils.deleteListItem(id)
  .then(
    () => dispatch(removeListItem(id))
  );
};

const removeListItem = id => ({
  type: REMOVE_LIST_ITEM,
  id
});