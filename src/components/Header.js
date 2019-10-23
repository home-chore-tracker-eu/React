import React from "react";
import "antd/dist/antd.css";
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

const AppHeader = ({ history, setVisible, visible, handleMenu, target, setTarget }) => {
  let username = profile.user ? profile.user.name : "";
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Log Out</Menu.Item>
    </Menu>
  );


  const content = (
    <div>
      <p>John completed a task!</p>
      <p>Mary missed the due date for a task!</p>
    </div>
  );

  const buttonmenu = (
    <Menu onClick={handleMenu}>
      <Menu.Item key="Family">Family</Menu.Item>
      <Menu.Item key="Child">Child</Menu.Item>
      <Menu.Item key="Chore">Chore</Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="header"
      style={{ background: "#fff", padding: 0, positon: "fixed" }}
    >

<button
        className="logout"
        onClick={() => {
          localStorage.removeItem("token");
  
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
        <div className="header-button">
          <Dropdown overlay={buttonmenu}>
            <Button type="primary">
              <Icon type="plus" /> Create New <Icon type="down" />
            </Button>
          </Dropdown>
        </div>

        <div className="setting">
          <Badge className="header-icon">
            <Icon type="setting" />
          </Badge>
        </div>

        <div className="popover">
          <Popover content={content} trigger="click">
            <Badge className="header-icon" count={2}>
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

export default AppHeader;
