import {CHANGE_INPUT_VALUE, SUBMIT_TODO_ITEM_VALUE} from "./actionTypes";

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