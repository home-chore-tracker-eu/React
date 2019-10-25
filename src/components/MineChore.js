import React, { useState } from "react";
import DashboardLayout from "./Layout";
import Header from "./Header";


const MineChore = (props) => {
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState("");
  const [editing, setEditing] = useState(false);
  const [editItem, setEditItem] = useState({});

  console.log(props)

  function handleMenu(e) {
    setVisible(true);
    const savedTarget = e.key;
    setTarget(savedTarget);
  }
  return (
    <div className="App">
      <Header
        visible={visible}
        setVisible={setVisible}
        handleMenu={handleMenu}
        target={target}
        setTarget={setTarget}
      />
      <DashboardLayout
        visible={visible}
        setVisible={setVisible}
        target={target}
        setTarget={setTarget}
        handleMenu={handleMenu}
        editing={editing}
        setEditing={setEditing}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </div>
  );
};

export default MineChore;