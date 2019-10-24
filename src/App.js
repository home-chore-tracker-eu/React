import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from '../src/components/PrivateRoute'
import "./App.less";
import MineChore from './components/MineChore'
import Login from "./components/Login";
import "./App.less";
import SignUp from './components/SignUp';

function App() {
  return (
    <>
        <Route
          exact path='/'
          component={Login}
          />
          <Route
          exact path='/signup'
          component={SignUp}
          />
          <PrivateRoute path='/dashboard' component={MineChore} />
    </>
  );
}

export default App;