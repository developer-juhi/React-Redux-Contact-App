import React, { Fragment } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { checkUser } from './userActions';
import { useNavigate } from "react-router-dom";

const SingIn = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const onFinish = (values) => {
        const data = {
            email: values.email,
            password: values.password,
        };
        console.log(data)
        dispatch(checkUser(data));
        console.log(checkUser(data))
        console.log('Received values of form: ', values);
    };
    return (
        <Fragment>
            <div className="custom-sign-up">
                <div className='overlap-singup'>

                    <Row>

                        <Col span={24}>
                            <Container>
                                <div className='sing-up-main custom-sign-in'>

                                    <div className="site-card-border-less-wrapper center align-items-center d-flex">
                                        <Card title="Sing In" className='login-form'>
                                            <Form
                                                name="normal_login"
                                                className="login-form"
                                                initialValues={{
                                                    remember: true,
                                                }}
                                                onFinish={onFinish}
                                            >
                                                <Form.Item
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Eamil!',
                                                        },
                                                    ]}
                                                >
                                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Eamil" />
                                                </Form.Item>
                                                <Form.Item
                                                    name="password"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Password!',
                                                        },
                                                    ]}
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
                                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                                        Log in
                                                    </Button>
                                                    <br />
                                                    Or
                                                    <br />
                                                    <Button htmlType="button" onClick={() => navigate('/sing-up')}>
                                                        Register now!
                                                    </Button>

                                                </Form.Item>
                                            </Form>
                                        </Card>
                                    </div>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};
export default SingIn;