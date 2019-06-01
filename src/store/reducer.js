const defaultState = {
  inputValue: '123',
  list: [
    1,2,3,4
  ]
};

export default (state = defaultState, action)  => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === 'submit_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  return state;
}