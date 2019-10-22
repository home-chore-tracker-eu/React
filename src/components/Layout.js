import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Icon } from "antd";
import ChoresList from "./Chores";
import AddChore from "./AddChoreForm";
import Performances from "./Performances";
import { Route, Link, Switch } from "react-router-dom";
const { Content, Footer, Sider } = Layout;
// const {Title} = Typography
const { SubMenu } = Menu;

const DashboardLayout = () => {
  return (
    <Layout theme="dark" style={{ minHeight: "100vh" }}>
      {/* <div class="left-layout"> */}
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
            <Link to="/dashboard/overview">
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

          <Button type="primary" style={{ marginTop: 100 }}>
            Add Chore
          </Button>
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
            <Switch>
              <Route exact path="/dashboard/overview" component={ChoresList} />
              <Route
                exact
                path="/dashboard/performances"
                component={Performances}
              />
            </Switch>

            <AddChore />
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
