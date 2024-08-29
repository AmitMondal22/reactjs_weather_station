import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "../styles/layout/layout.css"

const { Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
  // const [collapsed, setCollapsed] = useState(true);
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Topbar onToggle={() => setCollapsed(!collapsed)} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2024 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
