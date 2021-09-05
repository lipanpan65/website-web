import React, { Component, Fragment } from 'react';

import { Form, Icon, Input, Button } from 'antd';

import { getToken, setToken } from '../../utils/session';

// Checkbox

import { reqLogin } from '../../api'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { username, password } = values
        reqLogin(username, password)
          .then(data => {
            const { message, code, token } = data
            // 设置token
            setToken(token)
          })
      }
    });
  };

  render () {
    const { getFieldDecorator } = this.props.form;

    // const formItemLayout = {
    //   labelCol: {
    //     xs: { span: 24 },
    //     sm: { span: 8 },
    //   },
    //   wrapperCol: {
    //     xs: { span: 24 },
    //     sm: { span: 16 },
    //   },
    // };

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} className="login-form">
          <Form.Item label="用户名">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名！' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
          {/* <Form.Item wrapperCol={{ span: 12, offset: 5 }}> */}
          {/* <Form.Item >
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          {/* <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button> */}
          {/* Or <a href="">register now!</a> */}
          {/* </Form.Item> */}

        </Form>
      </Fragment>

    );
  }
}

const LoginForm = Form.create({ name: 'login_form' })(Login);
export default LoginForm