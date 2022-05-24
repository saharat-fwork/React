import React from "react";

// import "antd/dist/antd.css";
// import "antd/dist/antd.less";
import "antd/dist/antd.min.css";

import image from "./assets/ghost-100.svg";

import "./SiderDemo.css";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  PieChartOutlined,
  //   TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Students", "2", <UserOutlined />),
  getItem("Dashboard", "3", <PieChartOutlined />),
  //   getItem("Users", "sub1", <TeamOutlined />, [
  //     getItem("Group 1", "6"),
  //     getItem("Group 2", "8"),
  //   ]),
];
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="ant-layout-sider-light"
          // style="border-right: 1px solid rgb(240, 240, 240); flex: 0 0 80px; max-width: 80px; min-width: 80px; width: 80px;"
          style={{
            borderRight: "1px solid rgb(240, 240, 240)",
            flex: "0 0 80px",
            maxWidth: "80px",
            minWidth: "80px",
            width: "80px",
          }}
        >
          <div className="w-1/2 py-2 mx-auto sm:w-3/5">
            <img className="h-20 w-auto mx-auto" src={image} alt="Logo" />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
          {/* <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items}
            /> */}
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
              height: "3rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <div>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </div>

            <div className="flex items-center justify-center gap-2 h-12">
              <span className="uppercase text-md flex justify-center items-center gap-1">
                <div className="bg-blue-100  rounded-md h-8 px-2.5  flex justify-center items-center gap-1">
                  <div className="bg-blue-800 rounded-full w-4 h-4"></div>
                  <span className="text-blue-800 font-medium tracking-wider">
                    super admin
                  </span>
                </div>
              </span>
              <button
                className="text-gray-400 border-gray-200 font-normal rounded-md h-8 border-2 px-2 gap-2 flex justify-center items-center "
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 transform rotate-180"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                Log out
              </button>
            </div>
          </Header>
          <Content></Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
