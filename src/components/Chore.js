import React from "react";
import { Card, Icon, Avatar, Tag, Statistic, Row, Col } from "antd";
import { useSelector } from "react-redux";
const { Meta } = Card;

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const Chore = props => {
  const children = useSelector(state => state.children);
  console.log(children);
  console.log(props.chore.id);
  console.log(
    children.children.find(
      child => child.chores["child_id"] === props.chore["child_id"]
    )
  );

  return (
    <Card
      hoverable="true"
      style={{
        width: 300,
        marginTop: 16,
        marginRight: 10,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        // borderRadius: "8px 8px 0 0"
      }}
      cover={
        <div>
          <div style={{ marginTop: "20px" }}></div>
          <Row gutter={24}>
            <Col span={12}>
              <Countdown
                title="Deadline"
                value={deadline}
                valueStyle={{ color: "#2593fc" }}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Points"
                value={10}
                precision={2}
                valueStyle={{ color: "#ff1493" }}
              />
            </Col>
          </Row>
        </div>
      }
      actions={[
        <Icon type="delete" key="delete" />,
        <Icon type="edit" key="edit" />
      ]}
    >
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
