// src/screens/LoginPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import Lottie from 'lottie-react';

import { Form, Input, Button, Row, Col, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import animationData from '../assets/lottie/Animation - 1722248975849.json';
import '../styles/screen/login.css'; 

import useLogin from '../hooks/apihooks/useLogin'


const LoginPage = () => {
  const {login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {loginHandler}=useLogin()

  // redirect is login dashboard
  useEffect(() => {

    if (!loading && isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [loading, isAuthenticated, navigate]);


  // login event
  const onFinish = async (values) => {
    console.log('Received values: ', values);
    // var isValidUser=true;
    let logindata=await loginHandler(values.username,values.password)
    console.log("??????????????????????",logindata);
    // call login  api
    login(logindata);
    navigate('/profile');
   

    // isValidUser=false;

    // if (true) {
    //   console.log("Zdvwse");
    //   form.setFields([
    //     {
    //       name: 'username',
    //       errors: [' '], // Leave this empty to only show an error on the password field
    //     },
    //     {
    //       name: 'password',
    //       errors: ['Invalid username or password!'],
    //     },
    //   ]);
    // } else {
    //   // Proceed with the login (e.g., redirect to another page)
    //   console.log('Login successful!', values);
    // }


  };


  return (
<Row style={{ minHeight: '100vh' }}>
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
  );
};

export default LoginPage;
