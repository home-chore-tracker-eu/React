import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChores, fetchFamilies, fetchChildren } from "../store/actions";
import Chore from "./Chore";

const ChoresList = ({ editing, setEditing, handleEditing, setEditItem, setVisible, setTarget, target }) => {
  const chores = useSelector(state => state.chores);
  const families = useSelector(state => state.families);
  const dispatch = useDispatch();
  const children = useSelector(state => state.children.children);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchChores()), []);
  useEffect(() => dispatch(fetchFamilies()), []);
  useEffect(() => dispatch(fetchChildren()), []);


  // console.log(chores.isFetching);

  return (
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
  );
};

export default ChoresList;
