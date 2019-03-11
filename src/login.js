import React from 'react';
//导入需要的ui组件
import { Button, Icon, Form, Divider } from 'semantic-ui-react';
//导入样式
import './login.css'

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <div className="login-logo">
                    <Icon name='home' color="orange" size='massive' />
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Input icon='user'
                                    required
                                    size='big'
                                    iconPosition='left'
                                    name='username'
                                    placeholder='请输入用户名...'
                        />
                        <Form.Input icon='user'
                                    required
                                    size='big'
                                    iconPosition='left'
                                    name='username'
                                    placeholder='请输入用户名...'
                        />
                        <Button  fluid color="green">登录</Button>               
                    </Form>
                    <Divider horizontal>---</Divider>
                    

                </div>
                <div className="login-third">
                    <Icon name='qq' color="black" size='big' />
                    <Icon name='weixin' color="green" size='big' />
                </div>
            </div>
        )
    }
}
export default Login;