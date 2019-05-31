import {CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, SUBMIT_TODO_ITEM_VALUE} from './actionTypes'

const defaultState = {
  inputValue: '123',
  list: [1, 2],
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === SUBMIT_TODO_ITEM_VALUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState
  } else if (action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}