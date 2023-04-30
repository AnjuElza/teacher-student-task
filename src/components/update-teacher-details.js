import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import {  useNavigate } from 'react-router';

export default function UpdateTeacherdetails() {
    const [FName1, setFName1] = useState('');
    const [subject1, setSubject1] = useState('');
    const [contactNo1, setContactNo1] = useState('');
    const [ID1, setID1] = useState(null);
    let navigate =  useNavigate();
    useEffect(() => {
            setID1(localStorage.getItem('ID1'))
            setFName1(localStorage.getItem('FName1'));
            setSubject1(localStorage.getItem('subject1'));
            setContactNo1(localStorage.getItem('ContactNo1'))
    }, []);
    const updateAPIData1 = () => {
        axios.put(`https://644e6a264e86e9a4d8f8143f.mockapi.io/teachers_details/${ID1}`, {
            FName1,
             subject1,
             contactNo1
            }).then(() => {
                navigate('/teacher-details')
            })
        }
    return (
        <div>
           <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={FName1} onChange={(e) => setFName1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Subject</label>
                    <input placeholder='Subject' value={subject1} onChange={(e) =>setSubject1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contact Number</label>
                    <input placeholder='Contact Number' value={contactNo1} onChange={(e) => setContactNo1(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData1}>Update</Button>
            </Form>
        </div>
    )
}