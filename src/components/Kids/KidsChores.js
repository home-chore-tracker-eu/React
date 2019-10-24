import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chore from "./KidsChore";
import { Skeleton, List, Avatar } from "antd";
import axiosWithAuth from "../../axios";

const KidsChores = props => {
  const children = useSelector(state => state.children.children);
  const [loading, setLoading] = useState(true);
  const [kidsChores, setKidsChores] = useState();

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

  if (!loading) {
    return (
      <div className="chores">
        {kidsChores.map(chore => (
          <Chore key={chore.id} chore={chore} children={children} />
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
