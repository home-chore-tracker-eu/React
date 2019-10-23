import React from "react";
import { Card, Icon, Avatar, Tag } from "antd";
const { Meta } = Card;

const Chore = props => {
  return (
    <Card
      style={{
        width: 300,
        marginTop: 16,
        marginRight: 10,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }}
      cover={
        <img
          alt="example"
          src="https://www.csaimages.com/pix/snap/misc/83958_p.jpg"
          style = {{maxHeight: "50%"}}
        />
      }
      actions={[
        <Icon type="delete" key="delete" />,
        <Icon type="edit" key="edit" />
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.chore.title}
        description={props.chore.description}
      />

      <div className="card-bottom">
        <div className="assigned">Assigned to: {}</div>
        <div className="tag">
          <Tag color="green">Nearly due</Tag>
        </div>
      </div>
    </Card>
  );
};

export default Chore;
