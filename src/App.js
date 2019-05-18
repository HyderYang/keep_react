import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LIST_VIEW, CHART_VIEW} from './config/ constant'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import MonthPicker from './components/MonthPicker'

const items = [
  {
    id: 1,
    title: "成都旅游",
    price: 200,
    date: "2019-05-01",
    category: {
      id: 1,
      name: "旅行",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 2,
    title: "成都补助",
    price: 50,
    date: "2019-05-01",
    category: {
      id: 1,
      name: "旅行",
      type: "income",
      iconName: "ios-plane"
    }
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MonthPicker
        year={2018}
        month={5}
        onChange={(year, month) => {
            console.log(year, month)
        } }
      />
      {/*<ViewTab*/}
      {/*  activeTab={LIST_VIEW}*/}
      {/*  onTabChange={(view) => {*/}
      {/*      console.log(view)*/}
      {/*  } }*/}
      {/*/>*/}
      {/*<PriceList*/}
      {/*  items={items}*/}
      {/*  onModifyItem={(item) => {*/}
      {/*    alert(item.id)*/}
      {/*  }}*/}
      {/*  onDeleteItem={(item) => {*/}
      {/*    alert(item.id)*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
