import React from "react";
import * as data from "./fakedata.js";
import Chore from "./Chore";

const ChoresList = () => {
  return (
    <div className="chores">
      {data.chores.map(chore => (
        <Chore key={chore.id} chore={chore} />
      ))}
    </div>
  );
};

export default ChoresList;
