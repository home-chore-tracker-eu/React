import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from '../src/components/PrivateRoute'
import "./App.less";
import MineChore from './components/MineChore'
import Login from "./components/Login";

function App() {
  console.log(useSelector(state => state.families.families))

  return (
    <>
        <Route
          exact path='/login'
          component={Login}
          />
          <PrivateRoute exact path='/dashboard' component={MineChore} />
    </>
  );
}

export default App;
