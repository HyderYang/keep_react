import React from 'react'
import {connect} from 'react-redux'

class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text"
                 value={this.props.inputValue}
                 onChange={this.props.handleInputChangeValue}
          />
          <button onClick={this.props.handleSubmit}>提交</button>
          <ul>
            {
              this.props.list.map((item, index) => {
                return <li>
                  {item}
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};
const mapDispatchToProps = (dispatch) => {
    return {
      handleInputChangeValue (e) {
        const action = {
          type: 'change_input_value',
          value: e.target.value
        };
        dispatch(action)
      },

      handleSubmit () {
        const action = {
          type: 'submit_item'
        };
        dispatch(action)
      }
    }
};

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);