// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo/png/logo-no-background.png';
import "../styles/layout/sidebar.css";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const items = [
    {
      key: 'sub1',
      icon: <HomeOutlined />,
      label: 'Navigation One',
      children: [
        {
          key: '1',
          label: <Link to="/dashboard">Dashboard</Link>,
        },
        {
          key: '2',
          label: <Link to="/profile">Profile</Link>,
        },
      ],
    },
    {
      key: 'sub2',
      icon: <UserOutlined />,
      label: 'Navigation Two',
      children: [
        {
          key: '3',
          label: <Link to="/option3">Option 3</Link>,
        },
        {
          key: '4',
          label: <Link to="/option4">Option 4</Link>,
        },
      ],
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <Sider
      width={250}
      className="site-layout-background sidebar"
      collapsible
      collapsed={collapsed}
    >
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-width" />
      </div>
      <hr />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
