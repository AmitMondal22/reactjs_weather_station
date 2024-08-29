// Topbar.js
import React from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import "../styles/layout/topbar.css";

const { Header } = Layout;

const Topbar = ({ onToggle }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#4fd4a3' }}>
      <div className="topbar-content">
        <Button
          className="toggle-button"
          icon={<MenuOutlined />}
          onClick={onToggle}
          style={{ border: 'none' }}
        />
        <div className="logo"> {/* Optionally include your logo here */} </div>
      </div>
    </Header>
  );
};

export default Topbar;
