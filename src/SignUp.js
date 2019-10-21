import React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const SignUpForm = props => {
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Here are the form values", values);
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your name!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Name"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your Surname!" }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Surname"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ type: 'email', required: true, message: "Please input a valid email." }]
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
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
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
const SignUp = Form.create({ name: "normal_login" })(SignUpForm);
export default SignUp;