import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChores } from "../store/actions";
import Chore from "./Chore";

const ChoresList = () => {
  const chores = useSelector(state => state.chores);
  console.log(useSelector(state => state.families.families));
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchChores()), []);

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
