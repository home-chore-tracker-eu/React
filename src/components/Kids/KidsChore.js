import React from "react";
import { Card, Icon, Avatar, Tag, Statistic, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { editChore } from "../../store/actions";
const { Meta } = Card;

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const Chore = props => {
  const dispatch = useDispatch();

  const choreToBeMarked = { ...props.chore, childMarkComplete: true };
  const handleComplete = e => {
    e.preventDefault();
    dispatch(editChore(props.chore.id, choreToBeMarked));
  };

  return (
    <Card
      style={{
        width: 300,
        marginTop: 16,
        marginRight: 10,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
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
      actions={[<Icon type="check-circle" key="Chore" onClick={handleComplete} theme="filled"/>]}
    >
      <Avatar src="https://thecutebabycontest.com/wp-content/uploads/2019/03/winner-3-1552330890.jpg" />
      <br />
      <br />
      <Meta title={props.chore.title} description={props.chore.description} />
      <div className="card-bottom">
        <div className="assigned">Assigned to me</div>
        <div className="tag">
          <Tag color="green">On schedule</Tag>
        </div>
      </div>
    </Card>
  );
};

export default Chore;
