import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from "./actionTypes";
import Axios from "axios";
import {initListAction} from "./actionCreators";

function* getInitList() {
  const res = yield Axios.get('/test.json');
  const action = initListAction(res.data.list);
  yield put(action);
  // Axios.get('/test.json').then(
  //   (res) => {
  //     const data = res.data.list;
  //     const action = initListAction(data);
  //     put(action);
  //   }
  // )
}

function* sagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default sagas;