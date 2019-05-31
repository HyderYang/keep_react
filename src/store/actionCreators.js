import {CHANGE_INPUT_VALUE, GET_INIT_LIST, INIT_LIST_ACTION, SUBMIT_TODO_ITEM_VALUE,} from "./actionTypes";

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
};

export const getAddItemAction = () => {
  return {
    type: SUBMIT_TODO_ITEM_VALUE
  }
};

export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
};

export const getInitList = () => {
    return {
      type: GET_INIT_LIST
    }
};