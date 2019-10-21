import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import Axios from "axios";

const baseApi = 'https://home-chore-tracker.herokuapp.com/api/'

const LoginForm = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Here are the form values", values.username);
        Axios
          .post('https://home-chore-tracker.herokuapp.com/api/auth/login', {
            "email": values.username,
            "password": values.password
          })
          .then(res => {
            localStorage.setItem('token', res.data.token)
            alert(res.data.message)
            console.log(res.data.token)
          })
          .catch(error => {
            alert(error.response.data.error);
          });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your email!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(255,0,0,.5)" }} />}
            placeholder="email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,255,.5)" }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot" href="google.com">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
const Login = Form.create({ name: "normal_login" })(LoginForm);
export default Login;
