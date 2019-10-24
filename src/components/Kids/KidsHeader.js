import React from "react";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import {
  Layout,
  Icon,
  Badge,
  Menu,
  Dropdown,
  Avatar,
  Popover,
  Input,
} from "antd";

const { Search } = Input;
const { Header } = Layout;

const profile = {
  user: "random"
};

const KidsHeader = ({
  history,
  setVisible,
  visible,
  handleMenu,
  target,
  setTarget,
  setParent
}) => {
  let username = profile.user ? profile.user.name : "";
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Log Out</Menu.Item>
    </Menu>
  );

  const content = (
    <div>
      <p>You have a new task!</p>
    </div>
  );

  const redirect = useHistory();

  return (
    <Header
      className="header"
      style={{ background: "#fff", padding: 0, positon: "fixed" }}
    >
      <button
        className="logout"
        onClick={() => {
          localStorage.removeItem("token");
          redirect.push("/");
        }}
      >
        Logout
      </button>
      <div className="left">
        <div>
          <h2>MineChore</h2>
        </div>
        <div>
          <Search
            placeholder="Search for chores"
            onSearch={value => console.log(value)}
            style={{ width: 300 }}
          />
        </div>
      </div>

      <div className="right">
        <div className="setting">
          <Badge className="header-icon">
            <Icon type="setting" />
          </Badge>
        </div>

        <div className="popover">
          <Popover content={content} trigger="click">
            <Badge className="header-icon" count={1}>
              <a href="#">
                <Icon type="bell" />
              </a>
            </Badge>
          </Popover>
        </div>

        <div className="dropdown">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Avatar
                src="https://www.freakmusic.co.uk/blog/wp-content/uploads/2017/03/Jayne-Carmichael-Norrie-209x300.jpg"
                style={{ verticalAlign: "middle" }}
              >
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

export default KidsHeader;