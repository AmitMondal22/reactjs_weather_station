// LayoutComponent.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const { Content, Footer } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Topbar />
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
