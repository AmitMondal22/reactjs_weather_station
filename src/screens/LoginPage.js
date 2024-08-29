// src/screens/LoginPage.js
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// const {login, isAuthenticated, loading } = useAuth();
import Lottie from 'lottie-react';

import { Form, Input, Button, Row, Col, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import animationData from '../assets/lottie/Animation - 1722248975849.json';
import '../styles/screen/login.css'; 

import useLogin from '../hooks/apihooks/useLogin'

import {convertErrorObjectToFormErrors } from '../utils/errorformat'
import CustomMessage from '../components/notification/CustomMessage';
import { useAuth } from '../contexts/AuthProvider';


const LoginPage = () => {
  const {login, isAuthenticated, loading } = useAuth();

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {apiLogin}=useLogin()

  // redirect is login dashboard
  useEffect(() => {
    console.log(loading);
    console.log(isAuthenticated());
  }, [loading, isAuthenticated]);


  // login event
  const onFinish = async (values) => {
    let logindata=await apiLogin(values.username,values.password)
    if(logindata.success){
      CustomMessage('Login successful');
      login(logindata);
      
      navigate('/main');
    }else{
      console.log(logindata.error);
      // const jsondata = JSON.parse(logindata.error);
      form.setFields([
        convertErrorObjectToFormErrors(logindata.error)
      ]);
    }
  };


  return (
    <>
    {
      isAuthenticated() ? <Navigate to={'/main'} replace/> : <Row style={{ minHeight: '100vh' }}>
      {/* Desktop view */}
      <Col
        xs={0}
        sm={0}
        md={15}
        lg={15}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Lottie animationData={animationData} style={{ maxWidth: '80%' }} />
      </Col>

      {/* Mobile view */}
      <Col
        xs={24}
        sm={24}
        md={9}
        lg={9}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Form
          name="login"
          onFinish={onFinish}
          form={form}
          style={{
            width: '100%',
            maxWidth: 300,
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Welcome Back :)</h2>
          <p style={{ textAlign: 'center' }}>
            Secure your weather data with IoTBlitz LLP's reliable login.
          </p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              size="large"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ textAlign: 'left' }}
          >
            <Checkbox className="custom-checkbox">Remember Me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    }
    </>
    
  );
};

export default LoginPage;
