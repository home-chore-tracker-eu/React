import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import ChoresList from "./Chores";
import Forms from "./Forms";
import Performances from "./Performances";
import { Route, Link } from "react-router-dom";
const { Content, Footer, Sider } = Layout;
// const {Title} = Typography
const { SubMenu } = Menu;

const DashboardLayout = ({
  visible,
  setVisible,
  target,
  setTarget,
  handleMenu
}) => {
  return (
    <Layout theme="dark" style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          position: "fixed",
          top: 55
        }}
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ marginTop: 18 }}
        >
          <Menu.Item key="1">
            <Link to="/#/dashboard/overview">
              <Icon type="home" theme="filled" />
              <span>Overview</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard/performances">
              <Icon type="pie-chart" theme="filled" />
              <span>Performances</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="smile" theme="filled" />
                <span>Family</span>
              </span>
            }
          >
            <Menu.Item key="6">
              {" "}
              <Icon type="skin" theme="filled" />
              <span>Kevin</span>
            </Menu.Item>
            <Menu.Item key="7">
              {" "}
              <Icon type="skin" theme="filled" />
              <span>John</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      {/* </div> */}

      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: "rgb(240,240,240)",
              minHeight: "90vh"
            }}
          >
            <Route path="/dashboard" component={ChoresList} />
            <Route path="/dashboard/performances" component={Performances} />

            <Forms
              visible={visible}
              setVisible={setVisible}
              target={target}
              setTarget={setTarget}
              handleMenu={handleMenu}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made by Francis, Jayne, and James
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
