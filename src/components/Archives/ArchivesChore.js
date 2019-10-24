import React from "react";
import { Card, Icon, Avatar, Tag, Statistic, Row, Col, Alert } from "antd";

import { useDispatch } from "react-redux";
import { deleteChore } from "../../store/actions";
const { Meta } = Card;

const Chore = props => {
  const dispatch = useDispatch();

  console.log(props.chore);

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteChore(props.chore.id));
  };

  return (
    <Card
      hoverable="true"
      style={{
        width: 300,
        marginTop: 16,
        marginRight: 10,
        boxShadow: "0 8px 10px rgba(0,0,0,.20)"
      }}
      cover={
        <div>
          <div style={{ marginTop: "20px" }}></div>
          <Row gutter={24}>
            <Col span={24}>
              <Statistic
                title="Points"
                value={"CLAIMED"}
                precision={2}
                valueStyle={{ color: "#ff1493" }}
              />
            </Col>
          </Row>
        </div>
      }
      actions={[<Icon type="delete" onClick={handleDelete} />]}
    >
      {props.chore.childMarkComplete && props.chore.parentMarkComplete ? (
        <Alert
          message="Completed"
          description="This chore was completed with 10 points assigned."
          type="success"
          showIcon
        />
      ) : null}

      <Avatar src="https://thecutebabycontest.com/wp-content/uploads/2019/03/winner-3-1552330890.jpg" />
      <br />
      <br />
      <Meta title={props.chore.title} description={props.chore.description} />
      <div className="card-bottom">
        <div className="assigned">Assigned to:{}</div>
        <div className="tag">
          <Tag color="green">On schedule</Tag>
        </div>
      </div>
    </Card>
  );
};

export default Chore;