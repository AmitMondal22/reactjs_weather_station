// Topbar.js
import React from 'react';
import { Layout, Menu,Breadcrumb,theme } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Import the menu icon for the toggle button
import "../styles/layout/topbar.css"

const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Topbar = ({ onToggle }) => {
  return (
    <Header className="site-layout-background" style={{ display: 'flex', alignItems: 'center', padding: 0,backgroundColor: '#4fd4a3' }}>
     <div className="demo-logo" />
     <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
    </Header>
  );
};

export default Topbar;
