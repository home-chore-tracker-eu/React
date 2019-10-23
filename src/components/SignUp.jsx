import React from "react";
import { Form, Icon, Input, Button, } from "antd";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUpForm = props => {

  const { getFieldDecorator, validateFields } = props.form;

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Here are the form values", values);
      }
      axios
        .post('https://home-chore-tracker.herokuapp.com/api/auth/register', {
          "name": values.name, 
          "email": values.email, 
          "password": values.password, 
          "pictureURL": values.pictureURL
        })
        .then(res => {
          localStorage.setItem('token', res.data.token)
          console.log(res)
          console.log(res.data.token)
          alert('You are registered! Please log in')
          history.push('/');

          })
        .catch(err => {
          console.log(err.message);
          });
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
        {getFieldDecorator("pictureURL", {
          rules: [{ required: true, message: "Please submit a link to a picture!" }]
        })(
          <Input
            prefix={<Icon type="picture" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Picture URL"
          />
        )}
      </Form.Item>
      
      <Form.Item>
        {/* {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)} */}
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
const SignUp = Form.create({ name: "normal_login" })(SignUpForm);
export default SignUp;