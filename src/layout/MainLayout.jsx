import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./main-layout.css";
import { logOut } from "../redux/apiRequest";
import { createAxios } from "../createInstance";
import { logOutSuccess } from "../redux/authSlice";
import React from "react";

import {
  PieChartOutlined,
  LineChartOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Input, Layout, Menu, theme, Space } from "antd";
import { CustomLogo } from "../Components/CustomLogo/CustomLogo";
import { Dropdown } from "../Components/Dropdown/Dropdown";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);

  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };

  return (
    <>
      <Layout>
        <Sider background="#33333" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <CustomLogo />
          </div>
          <Menu
            
            onClick={({ key }) => {
              if (key === "/logout") {
                handleLogout();
              } else {
                navigate(key);
              }
            }}
            
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "/",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "/statistic",
                icon: <LineChartOutlined />,
                label: "Statistic",
              },
              {
                key: "/chart",
                icon: <PieChartOutlined />,
                label: "Chart",
              },
              {
                key: "/setting",
                icon: <SettingOutlined />,
                label: "Setting",
              },
              {
                key: user ? "/logout" : "/login",
                icon: user ? <LogoutOutlined /> : <LoginOutlined />,
                label: user ? "Logout" : "Login",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <Dropdown />
          </Header>

          <Content
            style={{
              
              
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      {/* <Link to="/" classNameName="navbar-home"> Home </Link>
      {user? (
        <>
        <p classNameName="navbar-user">Hi, <span>  {user.username} </span> </p>
        <Link to="/logout" classNameName="navbar-logout" onClick={handleLogout}> Log out</Link>
        </>
      ) : (    
        <>
      <Link to="/login" classNameName="navbar-login"> Login </Link>
      <Link to="/register" classNameName="navbar-register"> Register</Link>
      </>
)} */}
    </>
  );
};

export default MainLayout;
