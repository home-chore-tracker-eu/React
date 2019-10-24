import React from "react";
import { Card } from "antd";

export default class PanelBox extends React.Component {
  render() {
    return (
      <Card
        className={"panel-box " + this.props.className}
        title={this.props.title}
        bordered={false}
        bodyStyle={this.props.bodyStyle}
      >
        {this.props.children}
      </Card>
    );
  }
}
