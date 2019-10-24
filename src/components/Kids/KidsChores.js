import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KidsChore from "./KidsChore";
import { Skeleton, List, Avatar } from "antd";
import axiosWithAuth from "../../axios";

const KidsChores = props => {
  const children = useSelector(state => state.children.children);
  const [loading, setLoading] = useState(true);
  const [kidsChores, setKidsChores] = useState();
  const [score, setScore] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(`children/${id}`)
      .then(res => {
        setKidsChores(res.data.chores);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  const handleCalculate = e => {
    const scores = kidsChores.filter(
      chore => chore.parentMarkComplete && chore.childMarkComplete
    );
    setScore(scores.length * 10);
  };

  if (!loading) {
    return (
      <div className="chores">
        <button onClick={handleCalculate}>Calculate Score</button>
        <p>{score}</p>
        {kidsChores.map(chore => (
          <KidsChore key={chore.id} chore={chore} children={children} />
        ))}
      </div>
    );
  }
  return (
    <Skeleton loading={loading} active avatar>
      <List.Item.Meta avatar={<Avatar />} />
      <List.Item.Meta avatar={<Avatar />} />
      <List.Item.Meta avatar={<Avatar />} />
      <List.Item.Meta avatar={<Avatar />} />
    </Skeleton>
  );
};

export default KidsChores;
