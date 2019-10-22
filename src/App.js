import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from '../src/components/PrivateRoute'
import "./App.css";
import MineChore from './components/MineChore'
import Login from "./components/Login";
import NavBar from "./components/Navbar";

function App() {
  console.log(useSelector(state => state.families.families))

  return (
    <div className="App">
      <NavBar />
      <main>
        <Route
          exact path='/login'
          component={Login}
          />
          <PrivateRoute path='/home' component={MineChore} />
      </main>
    </div>
  );
}

export default App;
