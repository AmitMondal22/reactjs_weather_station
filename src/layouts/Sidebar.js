// Sidebar.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" style={{backgroundColor:"#aef2d5"}}>
          <Link to="/profile">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
