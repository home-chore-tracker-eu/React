import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/Navbar";
import TaskList from "./components/TaskList"

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Route path="/login" component={Login} />
        <Route
          path="/tasklist"
          render={props => withAuthCheck(TaskList, props)}
        />
      </main>
    </div>
  );
}

function withAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default App;
