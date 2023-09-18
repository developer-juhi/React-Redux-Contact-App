// AddContact.js
import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from './contactActions';
import { Button, Form, Input } from 'antd';
import { Col, Row, Card } from 'antd';
import { useNavigate } from "react-router-dom";



import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from './imageActions';



const AddContact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        dispatch(addContact(data));
    };

    const onFinish = async (values) => {

        const data = {
            id: Date.now(),
            name: values.name,
            email: values.email,
            phoneNo: values.phoneNo,
            photo: uploadedImage,
        };
        await handleSubmit(data);

        navigate('/list-contact')
        // console.log('Success:', data);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    const uploadedImage = useSelector((state) => state.image.uploadedImage);

    const onDrop = useCallback(
        (acceptedFiles) => {
            const imageFile = acceptedFiles[0];
            dispatch(uploadImage(URL.createObjectURL(imageFile)));
        },
        [dispatch]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const dropzoneStyles = {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
    };

    const imageStyles = {
        maxWidth: '100%',
        maxHeight: '300px',
    };


    return (
        <Fragment>

            <Row>
                <Col span={4}>

                </Col>
                <Col span={16}>

                    <Card
                        title="Add Contact"
                        className='p-5'
                        bordered={true}
                    >

                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Phone No"
                                name="phoneNo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phoneNo!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <div {...getRootProps()} style={dropzoneStyles}>
                                <input {...getInputProps()} />
                                <p>Drag & drop an image here, or click to select one</p>
                            </div>
                            {uploadedImage && (
                                <div>
                                    <h3>Uploaded Image:</h3>
                                    <img src={uploadedImage} alt="Uploaded" style={imageStyles} />
                                </div>
                            )}

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={4}>

                </Col>
            </Row>
        </Fragment>

    );
};

export default AddContact;