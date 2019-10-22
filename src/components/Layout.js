import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Button, Icon } from "antd";
import ChoresList from "./Chores";
import { Route } from "react-router-dom";
const { Content, Footer, Sider } = Layout;
// const {Title} = Typography
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout theme="dark" style={{ minHeight: "100vh" }}>
        {/* <div class="left-layout"> */}
          <Sider
            
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{
              overflow: "auto",
              height: "100vh",
              left: 0,
              position: 'fixed',
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
                <Icon type="home" theme="filled" />
                <span>Home</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="pie-chart" theme="filled" />
                <span>Performances</span>
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

              
                <Button type = "primary" style = {{marginTop: 100}}>Add Chore</Button>
             
            </Menu>
          </Sider>
        {/* </div> */}

        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
           
            <div
              style={{
                padding: 24,
                background: "rgb(240,240,240)",
                minHeight: "90vh"
              }}
            >
              <Route exact path="/" component={ChoresList} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made by Francis, Jayne, and James
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
