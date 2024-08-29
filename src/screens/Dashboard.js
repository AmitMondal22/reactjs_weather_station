// src/components/Dashboard.js
import React from 'react';
import { Layout, Breadcrumb, theme } from 'antd';
const { Content } = Layout;



const Dashboard = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
    {/* <Breadcrumb style={{ margin: '16px 0' }} >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }} > */}
          {/* <Content style={{
            margin: '24px 0px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }} > */}
           {/* {children} */}
           {/* <div style={{ padding: 24, minHeight: 360 }}>
            
          </div> */}
          {/* </Content> */}
      <h2>Dashboard</h2>
      <p>This is a protected route.</p>
    </div>
  );
};

export default Dashboard;
