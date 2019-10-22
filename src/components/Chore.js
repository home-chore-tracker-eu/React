import React from "react";
import { Card, Icon, Avatar } from 'antd';
const {Meta} = Card


const Chore = (props) => {
    return (
        <Card style={{ width: 300, marginTop: 16 }} >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={props.chore.title}
            description="This is the description"
            actions={[
              <Icon type="setting" key="settings" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          />
        </Card>
    )

}

export default Chore;