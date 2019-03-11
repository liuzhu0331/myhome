import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import './App.css';
//导入组件库样式
import 'semantic-ui-css/semantic.min.css'

import Login from './login';
import Main from './module/main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Main}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
