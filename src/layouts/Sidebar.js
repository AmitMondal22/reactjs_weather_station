// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import { HomeOutlined,SettingOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo/png/logo-no-background.png';
import logoCollapsed from '../assets/img/logo/png/logo-no-background.svg-removebg-preview.png'

import "../styles/layout/sidebar.css"

const { Sider } = Layout;


const items = [
  {
    key: 'sub1',
    icon: <HomeOutlined />, // Add icon here
    label: 'Navigation One',
    children: [
      {
        key: '1',
        label: <Link to="/">Dashboard</Link>, // Add link path here
      },
      {
        key: '2',
        label: <Link to="/main/profile">Profile</Link>, // Add link path here
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









const Sidebar = ({ collapsed }) => {

  

  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  


  return (
    <Sider
       
      collapsed={collapsed}
      breakpoint="lg"
      // collapsedWidth="0"
      // width={200}
      style={{
        background: colorBgContainer,
        height: '100vh'
      }}
      // style={siderStyle}
    >
     <img 
        // src={logo}
        src={collapsed ? logoCollapsed : logo} 
        alt="Logo" 
        style={{ height: '80px', padding:'8px', width:'100%' }} 
        // className='logo'
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          // height: '100%',
          borderRight: 0,
        }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
