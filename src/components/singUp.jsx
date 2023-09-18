import React, { Fragment, useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card } from 'antd';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userActions';
import { useNavigate } from "react-router-dom";

const SingUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        const data = {
            id: Date.now(),
            email: values.email,
            password: values.password,
        };
        dispatch(addUser(data));
        navigate('/list-contact')
    };
    return (
        <Fragment>
            <div className="custom-sign-up">
                <div className='overlap-singup'>


                    <Row>
                        <Col span={24}>
                            <Container>
                                <div className='sing-up-main'>

                                    <div className="site-card-border-less-wrapper center p-5 align-items-center d-flex">
                                        <Card title="Sing Up" className='login-form' >
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
                                                            message: 'Please input your Email!',
                                                        },
                                                    ]}
                                                >
                                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                                                <Form.Item
                                                    name="Confirm password"
                                                    dependencies={['password']}
                                                    hasFeedback
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Confirm Password!',
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_, value) {
                                                                if (!value || getFieldValue('password') === value) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error('The new password that you entered do not match!'));
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <Input
                                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                    />
                                                </Form.Item>

                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit" className="login-form-button button-center">
                                                        Submit
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
export default SingUp;