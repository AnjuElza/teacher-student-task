import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {  useNavigate } from 'react-router';

export default function Create() {
    const [fname, setFName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo]= useState('');
    let navigate =  useNavigate();
        const postData = () => {
            axios.post(`https://644e6a264e86e9a4d8f8143f.mockapi.io/student_details`, {
                fname,
                address,
                contactNo
            }).then(() => {
                 navigate('/read')
               // console.log(fname,address,contactNo);

            })
        }
        
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setFName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contact Number</label>
                    <input placeholder='Contact Number' onChange={(e) => setContactNo(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}