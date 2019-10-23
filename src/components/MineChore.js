import React, {useState, useEffect} from "react";
import DashboardLayout from "./Layout";
import Header from "./Header"
import {fetchChores} from '../store/actions'
import { useDispatch } from 'react-redux'

const MineChore = () => {
const [visible, setVisible] = useState(false);
const [target, setTarget] = useState("");
const dispatch = useDispatch()

useEffect(() => dispatch(fetchChores()), [dispatch]);

function handleMenu(e) {
  setVisible(true)
  const savedTarget = e.key;
  setTarget(savedTarget);
}

  return (
    <div className="App">
      <Header visible = {visible} setVisible={setVisible} handleMenu = {handleMenu} target = {target} setTarget={setTarget}/>
      <DashboardLayout visible = {visible} setVisible={setVisible} target = {target} setTarget={setTarget} handleMenu = {handleMenu}/>
    </div>
  );
};

export default MineChore