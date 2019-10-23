import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from '../src/components/PrivateRoute'
import "./App.less";
import MineChore from './components/MineChore'
import Login from "./components/Login";
import "./App.less";

function App() {
  return (
    <>
        <Route
          exact path='/'
          component={Login}
          />
          <PrivateRoute path='/dashboard' component={MineChore} />
    </>
  );
}

export default App;
