import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "../src/components/PrivateRoute";
import SecondPrivateRoute from "../src/components/SecondPrivateRoute";
import Profile from "./components/Profile";
import {
  fetchChildren,
  fetchChores,
  fetchFamilies,
  fetchUser
} from "./store/actions";
import KidsDashboard from "./components/Kids/KidsDashboard";
import "./App.less";
import MineChore from "./components/MineChore";
import Login from "./components/Login";
import "./App.less";

function App() {
  const [kid, setKid] = useState(false);
  const [parent, setParent] = useState(false);
  const chores = useSelector(state => state.chores.chores);
  const families = useSelector(state => state.families.families);
  const children = useSelector(state => state.children.children);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchChores()), [chores]);
  useEffect(() => dispatch(fetchFamilies()), [families, dispatch]);
  useEffect(() => dispatch(fetchChildren()), [children]);
  useEffect(() => dispatch(fetchUser()), [user]);

  return (
    <>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/profile"
        render={props => (
          <Profile
            {...props}
            kid={kid}
            setKid={setKid}
            parent={parent}
            setParent={setParent}
          />
        )}
      />
      <PrivateRoute path="/dashboard" component={MineChore} />
      <SecondPrivateRoute path="/kids/:id" component={KidsDashboard} />
    </>
  );
}

export default App;
