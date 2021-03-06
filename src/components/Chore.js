import React from "react";
import {
  Card,
  Icon,
  Avatar,
  Tag,
  Statistic,
  Row,
  Col,
  Alert,
  Button
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteChore, editChore, addActivity } from "../store/actions";
import moment from "moment";
const { Meta } = Card;

const { Countdown } = Statistic;

const Chore = props => {
  const deadline = props.chore.childMarkComplete
    ? 0
    : Date.parse(props.chore.duedate);

  const children = useSelector(state => state.children.children);

  const dispatch = useDispatch();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteChore(props.chore.id));
  };

  const choreToBeMarked = { ...props.chore, parentMarkComplete: true };
  const parentMarkComplete = e => {
    e.preventDefault();
    dispatch(editChore(props.chore.id, choreToBeMarked));
    dispatch(
      addActivity(
        `You confirmed the completion of a chore on ${moment().format(
          "MMMM Do YYYY, h:mm:ss a"
        )}`
      )
    );
  };

  const target = "Chore";

  const actionsUIHandler = () => {
    if (props.chore.parentMarkComplete && props.chore.childMarkComplete) {
      return [<Icon type="delete" onClick={handleDelete} />];
    }

    if (props.chore.childMarkComplete && !props.chore.parentMarkComplete) {
      return [<Button onClick={parentMarkComplete}>Approve</Button>];
    }

    if (!props.chore.parentMarkComplete && !props.chore.childMarkComplete) {
      return [
        <Icon type="delete" onClick={handleDelete} />,
        <Icon type="edit" onClick={handleEditing} />
      ];
    }
  };

  const handleEditing = e => {
    props.setEditing(true);
    props.setTarget(target);
    props.setEditItem(props.chore);
    if (props.editing === true) {
      props.setVisible(true);
    }
  };

  return (
    <Card
      hoverable="true"
      style={{
        width: "24%",
        marginTop: 16,
        marginRight: 10,
        boxShadow: "0 8px 10px rgba(0,0,0,.20)"
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
      actions={actionsUIHandler()}
    >
      {props.chore.childMarkComplete && !props.chore.parentMarkComplete && (
        <Alert
          message="Seeking Approval"
          description="This chore has been marked complete by the child."
          type="info"
          showIcon
        />
      )}

      {!props.chore.childMarkComplete && (
        <Alert
          message="In Progress"
          description="This chore has not been completed."
          type="warning"
          showIcon
        />
      )}

      {props.chore.childMarkComplete && props.chore.parentMarkComplete ? (
        <Alert
          message="Completed"
          description="This chore has been completed with 10 points assigned."
          type="success"
          showIcon
        />
      ) : null}

      <Avatar src="https://thecutebabycontest.com/wp-content/uploads/2019/03/winner-3-1552330890.jpg" />
      <br />
      <br />
      <Meta title={props.chore.title} description={props.chore.description} />
      <div className="card-bottom">
        <div className="assigned">
          Assigned to:{" "}
          <strong>
            {children.length > 0
              ? children.find(child => child.id === props.chore.child_id).name
              : ""}
          </strong>
        </div>
        <div className="tag">
          <Tag color="green">On schedule</Tag>
        </div>
      </div>
    </Card>
  );
};

export default Chore;
