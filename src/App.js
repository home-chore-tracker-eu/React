import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Route
          exact path='/login'
          component={Login}
          />
      </main>
    </div>
  );
}

export default App;
