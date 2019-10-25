import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ArchivesChore from "./ArchivesChore";

function ArchivesChores() {
  const chores = useSelector(state => state.chores.chores);
  const [archives, setArchives] = useState([]);

  useEffect(
    () =>
      setArchives(
        chores.filter(
          chore => chore.parentMarkComplete && chore.childMarkComplete
        )
      ),
    [chores]
  );

  console.log(archives)

if (archives.length) {
  return (
    <div className="dashboard-chores">
      {archives.map(chore => (
        <ArchivesChore chore={chore} />
      ))}
    </div>
  );
}
return null
}

export default ArchivesChores;
