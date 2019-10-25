import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  Layout,
  Icon,
  Badge,
  Menu,
  Dropdown,
  Avatar,
  Popover,
  Input,
  Button
} from "antd";

const { Search } = Input;
const { Header } = Layout;

const profile = {
  user: "random"
};

const AppHeader = ({ handleMenu }) => {
  let username = profile.user ? profile.user.name : "";

  const [notification, setNotification] = useState();
  const chores = useSelector(state => state.chores.chores);
  const children = useSelector(state => state.children.children);
  const user = useSelector(state => state.user.user);

  useEffect(
    () =>
      setNotification(
        chores.filter(
          chore => chore.childMarkComplete === 1 && !chore.parentMarkComplete
        ).length
      ),
    [chores]
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">Profile Page</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("token");
          redirect.push("/");
        }}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );

  const content = (
    <div>
      <p>{`You have ${notification} new submitted chore${
        notification !== 1 ? "s" : ""
      } awaiting approval!`}</p>
    </div>
  );

  const buttonmenu = (
    <Menu onClick={handleMenu}>
      <Menu.Item key="Family">Family</Menu.Item>
      <Menu.Item key="Child">Child</Menu.Item>
      <Menu.Item key="Chore">Chore</Menu.Item>
    </Menu>
  );

  const redirect = useHistory();

  return (
    <Header
      className="header"
      style={{ background: "#fff", padding: 0, positon: "fixed" }}
    >
      <div className="left">
        <div>
          <h2>MineChore</h2>
        </div>
      </div>

      <div className="right">
        <div className="header-button">
          <Dropdown overlay={buttonmenu}>
            <Button type="primary">
              <Icon type="plus" /> Create New <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="popover">
          <Popover content={content} trigger="click">
            <Badge className="header-icon" count={notification}>
              <Icon type="bell" />
            </Badge>
          </Popover>
        </div>

        <div className="dropdown">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Avatar src={user.pictureURL} style={{ verticalAlign: "middle" }}>
                {username}
              </Avatar>{" "}
              <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
