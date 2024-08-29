// Topbar.js
import React, { useState, useEffect } from 'react';
import { Layout, Menu,Dropdown,Avatar,Button   } from 'antd';
import { UserOutlined, FullscreenOutlined,FullscreenExitOutlined,MenuOutlined  } from '@ant-design/icons';
import logo from '../assets/img/logo/png/logo-no-background.png';
import "../styles/layout/topbar.css"

const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));




const menu = (
  <Menu>
    <Menu.Item key="1">
      View Profile
    </Menu.Item>
    <Menu.Item key="2">
      Logout
    </Menu.Item>
  </Menu>
);

const Topbar = ({ onToggleSidebar }) => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };



  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#2bc88e', // Set your desired background color here
      }}
    >
      {/* <div className="demo-logo" /> */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
{/*     
      <img 
        src={logo} 
        src={collapsed ? logoCollapsed : logoExpanded}
        alt="Logo" 
        style={{ height: '50px', marginRight: '16px' }} 
      /> */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={onToggleSidebar}
          style={{ color: 'white' }}
        />
      </div>
     <div style={{ display: 'flex', alignItems: 'center' }}>
        {isFullscreen ? (
          <FullscreenExitOutlined
            onClick={handleFullscreen}
            style={{ fontSize: '20px', marginRight: '16px', cursor: 'pointer', color: 'white' }}
          />
        ) : (
          <FullscreenOutlined
            onClick={handleFullscreen}
            style={{ fontSize: '20px', marginRight: '16px', cursor: 'pointer', color: 'white' }}
          />
        )}
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Avatar 
            icon={<UserOutlined />} 
            style={{ cursor: 'pointer' }} 
          />
        </Dropdown>
      </div>

    </Header>
  );
};

export default Topbar;
