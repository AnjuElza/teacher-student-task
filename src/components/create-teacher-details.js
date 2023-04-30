
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {  useNavigate } from 'react-router';


export default function CreateTeacherDetails() {
    const [FName1, setFName1] = useState('');
    const [subject1, setSubject1] = useState('');
    const [contactNo1, setContactNo1]= useState('');
    let navigate =  useNavigate();
        const postData1 = () => {
            axios.post(`https://644e6a264e86e9a4d8f8143f.mockapi.io/teachers_details`, {
                FName1,
                subject1,
                contactNo1
            }).then(() => {
                 navigate('/teacher-details')
               // console.log(fname,address,contactNo);

            })
        }
        
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => setFName1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Subject</label>
                    <input placeholder='Subject' onChange={(e) => setSubject1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contact Number</label>
                    <input placeholder='Contact Number' onChange={(e) => setContactNo1(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData1} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
