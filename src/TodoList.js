import React from 'react'
import {Button, Card, Input, List} from "antd";

import 'antd/dist/antd.css'

import store from './store'

export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  };

  handleChange = (e) => {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action)
  };

  handleBtnClick = () => {
    const action = {
      type: 'submit_todo_item_value'
    };
    store.dispatch(action);
  };

  render() {
    return (
      <Card title={"TODOLIST"} style={{marginTop: 10, marginLeft: 10}}>
        <Input
          onChange={this.handleChange}
          value={this.state.inputValue}
          placeholder={"todoInfo"}
          style={{width: '300px'}}
        />
        <Button
          onClick={this.handleBtnClick}
          type={"primary"}
        >
          提交
        </Button>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource = {this.state.list}
          renderItem={item => (
            <List.Item>{item}</List.Item>
          )}
        >
        </List>
      </Card>
    );
  }
}