import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import PrivateRoute from "../src/components/PrivateRoute";
import Profile from "./components/Profile";
import {fetchChildren, fetchChores, fetchFamilies} from './store/actions'
import KidsDashboard from './components/Kids/KidsDashboard'
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
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchChores()), [chores]);
  useEffect(() => dispatch(fetchFamilies()), [families, dispatch]);
  useEffect(() => dispatch(fetchChildren()), [children]);

  return (
    <>
      <Route path="/" component={Login} />
      <Route
        exact
        path="/profile"
        render={props => (
          <Profile
            {...props}
            kid={kid}
            setKid={setKid}
            parent = {parent}
            setParent={setParent}
          />
        )}
      />
        <PrivateRoute exact path="/dashboard" component={MineChore} />
        <PrivateRoute exact path="/kids/:id" component={KidsDashboard} />
    </>
  );
}

export default App;
