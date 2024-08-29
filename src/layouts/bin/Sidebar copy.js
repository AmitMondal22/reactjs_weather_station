// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu,Breadcrumb,theme } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, LaptopOutlined, NotificationOutlined, } from '@ant-design/icons';
import logo from '../assets/img/logo/png/logo-no-background.png';
import "../styles/layout/sidebar.css"




const { Header, Content, Sider } = Layout;

const Sidebar = ({ collapsed }) => {

  const items = [
    {
      key: 'sub1',
      icon: <HomeOutlined />, // Add icon here
      label: 'Navigation One',
      children: [
        {
          key: '1',
          label: <Link to="/dashboard">Dashboard</Link>, // Add link path here
        },
        {
          key: '2',
          label: <Link to="/profile">Profile</Link>, // Add link path here
        },
      ],
    },
    {
      key: 'sub2',
      icon: <UserOutlined />, // Add icon here
      label: 'Navigation Two',
      children: [
        {
          key: '3',
          label: <Link to="/option3">Option 3</Link>, // Add link path here
        },
        {
          key: '4',
          label: <Link to="/option4">Option 4</Link>, // Add link path here
        },
      ],
    },
    {
      key: 'settings',
      icon: <SettingOutlined />, // Add icon here
      label: <Link to="/settings">Settings</Link>, // Add link path here
    },
  ];


  return (
    <Sider width={250} className="site-layout-background" collapsible collapsed={collapsed} style={{backgroundColor:"#ffff"}}>
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-width' /> {/* Replace with your logo */}
      </div>
      <hr/>
      <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />


      {/* <Menu
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
        {/* Add more menu items as needed 
      </Menu> */}
    </Sider>
  );
};

export default Sidebar;
