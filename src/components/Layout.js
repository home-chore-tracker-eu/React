import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import ChoresList from "./Chores";
import ArchivesChores from "../components/Archives/ArchivesChores";
import Forms from "./Forms";
import Performances from "./Performances";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
const { Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const DashboardLayout = ({
  visible,
  setVisible,
  target,
  setTarget,
  handleMenu,
  editing,
  setEditing,
  handleEditing,
  editItem,
  setEditItem
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
            <Link to="/dashboard">
              <Icon type="home" theme="filled" />
              <span>Overview</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/performances">
              <Icon type="pie-chart" theme="filled" />
              <span>Performances</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/archives">
              <Icon type="profile" theme="filled" />
              <span>Archives</span>
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
            <Route
              exact
              path="/dashboard"
              render={props => (
                <ChoresList
                  {...props}
                  editing={editing}
                  setEditing={setEditing}
                  handleEditing={handleEditing}
                  editItem={editItem}
                  setEditItem={setEditItem}
                  setVisible={setVisible}
                  setTarget={setTarget}
                  target={target}
                />
              )}
            />

            <Route exact path="/performances" component={Performances} />
            <Route path="/archives" component={ArchivesChores} />

            <Forms
              visible={visible}
              setVisible={setVisible}
              target={target}
              setTarget={setTarget}
              handleMenu={handleMenu}
              editing={editing}
              setEditing={setEditing}
              editItem={editItem}
              setEditItem={setEditItem}
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
