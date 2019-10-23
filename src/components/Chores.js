import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChores, fetchFamilies, fetchChildren } from "../store/actions";
import Chore from "./Chore";

const ChoresList = () => {
  const chores = useSelector(state => state.chores);
  const families = useSelector(state => state.families);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchChores()), []);
  useEffect(() => dispatch(fetchFamilies()), []);
  useEffect(() => dispatch(fetchChildren()), []);
  console.log(families)

  // console.log(chores.isFetching);

  return (
    <div className="chores">
      {chores.chores.map(chore => (
        <Chore key={chore.id} chore={chore} />
      ))}
    </div>
  );
};

export default ChoresList;
