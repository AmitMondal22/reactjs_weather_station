// LayoutComponent.js
import React, { useState } from 'react';
import { Layout, Breadcrumb, theme } from 'antd';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../styles/layout/layout.css"

const { Content } = Layout;

const LayoutComponent = ({ children }) => {
  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      {/* <Topbar /> */}
      {/* <Topbar onToggleSidebar={toggleSidebar} /> */}
      <Sidebar collapsed={collapsed} />
      <Layout>
        {/* <Sidebar /> */}
        {/* <Sidebar collapsed={collapsed} /> */}
        <Topbar onToggleSidebar={toggleSidebar} />
        <Layout style={{ padding: '0 24px 24px'}}>
        {children}
          
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
