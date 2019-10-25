import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";
import ChoresList from "./KidsChores";
import Performances from "../Performances";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
const { Content, Footer, Sider } = Layout;

const KidsLayout = ({ editing, setEditing }) => {
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
              <span>My Chores</span>
            </Link>
          </Menu.Item>
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
            <Router>
              <Route
                exact
                path="/kids/:id"
                render={props => (
                  <ChoresList
                    {...props}
                    editing={editing}
                    setEditing={setEditing}
                  />
                )}
              />

              <Route path="/dashboard/performances" component={Performances} />
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made by Francis, Jayne, and James
        </Footer>
      </Layout>
    </Layout>
  );
};

export default KidsLayout;
