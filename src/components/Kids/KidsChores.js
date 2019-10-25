import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chore from "./KidsChore";
import { Skeleton, List, Avatar, Result, Button, Card, Icon } from "antd";
import axiosWithAuth from "../../axios";
import moment from "moment";

const KidsChores = props => {
  const children = useSelector(state => state.children.children);
  const [loading, setLoading] = useState(true);
  const [successBox, setSuccessBox] = useState(false);
  const [kidsChores, setKidsChores] = useState();
  const [score, setScore] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(`children/${id}`)
      .then(res => {
        setKidsChores(
          res.data.chores.filter(
            chore => !chore.childMarkComplete && !chore.parentMarkComplete
          )
        );
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id], successBox);

  const handleCalculate = e => {
    const scores = kidsChores.filter(
      chore => chore.parentMarkComplete && chore.childMarkComplete
    );
    setScore(scores.length * 10);
  };

  if (!loading) {
    return (
      <div className="chores">
        {/* <button onClick={handleCalculate}>Calculate Score</button>
        <p>{score}</p> */}

        {!kidsChores.length && (
          <Card>
            <Result
              icon={<Icon type="smile" theme="twoTone" />}
              title="There's nothing to see here!"
            />
            ,
          </Card>
        )}
        {successBox && (
          <Card>
            <Result
              status="success"
              title="Successfully Marked a Task Complete. Wait for Approval."
              subTitle={`Marked at ${moment()}`}
              extra={[
                <Button key="successs" onClick={() => setSuccessBox(false)}>
                  Close
                </Button>
              ]}
            />
          </Card>
        )}

        {!successBox &&
          kidsChores.map(chore => (
            <Chore
              key={chore.id}
              chore={chore}
              children={children}
              setSuccessBox={setSuccessBox}
            />
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
