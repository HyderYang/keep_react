import {
  CHANGE_INPUT_VALUE,
  INIT_LIST_ACTION,
  SUBMIT_TODO_ITEM_VALUE
} from "./actionTypes";
import Axios from "axios";

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

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get('/test.json').then(
          (res) => {
            const data = res.data.list;
            const action = initListAction(data);
            dispatch(action);
          }
        )
    };
};