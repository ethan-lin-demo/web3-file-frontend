import React, { useContext, useEffect } from 'react';
import { LockOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../containers/Cloud';

function Login() {
  const navigate = useNavigate();

  const {
    login,
    loginApi,
    fetching,
  } = useContext(Context);

  const onFinish = (values) => loginApi(values.password);

  useEffect(() => {
    if (login) {
      localStorage.password = login;
      navigate('/clouds');
    }
  }, [login]);

  useEffect(() => {
    if (localStorage.password) {
      navigate('/clouds');
    }
  }, []);

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={fetching}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
