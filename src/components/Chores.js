import React from "react";
import { useSelector } from "react-redux";
import {Card } from "antd"
import Banner from './Banner'
import Chore from "./Chore";

const ChoresList = ({ editing, setEditing, handleEditing, setEditItem, setVisible, setTarget, target }) => {
  const chores = useSelector(state => state.chores);
  const children = useSelector(state => state.children.children);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
    <Banner/>
    <div className="chores">
      {chores.chores.map(chore => (
        <Chore
          key={chore.id}
          chore={chore}
          children={children}
          chores={chores}
          editing={editing}
          setEditing={setEditing}
          handleEditing = {handleEditing}
          setEditItem = {setEditItem}
          setVisible = {setVisible}
          setTarget = {setTarget}
          target={target}
        />
      ))}
    </div>
    </>
  );
};

export default ChoresList;