// Topbar.js
import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const Topbar = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0,backgroundColor: '#4fd4a3' }}>
      <div className="logo" />
    </Header>
  );
};

export default Topbar;
