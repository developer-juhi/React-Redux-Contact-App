// ContactList.js
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './contactActions';
import { Card } from 'antd';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";

const ContactList = () => {
    const contacts = useSelector((state) => state.contact.contacts);
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };
    const imageStyles = {
        maxWidth: '100%',
        maxHeight: '300px',
    };
    return (
        <Fragment>


            <Row>
                <Col span={24} className='left-button'>
                    <Button variant="primary" onClick={() => navigate('/add-contact')}>
                        Add New Contact
                    </Button>

                </Col>
                <Col span={24}>
                    <Card
                        title="Contact List"
                        className=''
                        bordered={true}
                    // style={{
                    //     width: 1100,
                    // }}
                    >
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone numbe</th>
                                    <th>photo </th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, i) => (
                                    <tr key={contact.id}>
                                        <td>
                                            {contact.id ? contact.id : '--'}
                                        </td>
                                        <td>
                                            {contact.name}
                                        </td>
                                        <td>
                                            {contact.email}
                                        </td>
                                        <td>
                                            {contact.phoneNo}
                                        </td>
                                        <td>

                                            <img src={contact.photo} alt="Uploaded" style={imageStyles} />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(contact.id)}>Delete</Button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>


                        {/* <div>
                <ul>

                    {contacts.map((contact) => (

                        <li key={contact.id}>
                            {contact.name} - {contact.email}
                            <button onClick={() => handleDelete(contact.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div> */}
                    </Card>
                </Col>

            </Row>


        </Fragment>
    );
};

export default ContactList;