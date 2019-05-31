import React from 'react'
import {Button, Card, Input, List} from "antd";
import Axios from "axios";

import 'antd/dist/antd.css'

import store from './store'
import { DELETE_TODO_ITEM } from './store/actionTypes'
import {
  getAddItemAction,
  getInputChangeAction,
  initListAction,
} from './store/actionCreators';


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
    store.dispatch(getInputChangeAction(e.target.value))
  };

  handleBtnClick = () => {
    store.dispatch(getAddItemAction());
  };

  handleItemClick = (index) => {
    console.log(index);
    const action = {
      type: DELETE_TODO_ITEM,
      index
    };
    store.dispatch(action);
  };

  componentDidMount() {
    Axios.get('/test.json')
      .then((res) => {
        const data = res.data.list;
        store.dispatch(initListAction(data));
      })
  }

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
          // renderItem=
          renderItem={(item, index) => {
            return <List.Item
              onClick={this.handleItemClick.bind(this, index)}
            >
              {item}
            </List.Item>
          }}
        >
        </List>
      </Card>
    );
  }
}