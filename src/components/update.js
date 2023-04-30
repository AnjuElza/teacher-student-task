import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import {  useNavigate } from 'react-router';
export default function Update() {
    const [fname, setFName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [id, setID] = useState(null);
    let navigate =  useNavigate();
    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFName(localStorage.getItem('FName'));
            setAddress(localStorage.getItem('Address'));
            setContactNo(localStorage.getItem('ContactNo'))
    }, []);
    const updateAPIData = () => {
        axios.put(`https://644e6a264e86e9a4d8f8143f.mockapi.io/student_details/${id}`, {
            fname,
             address,
             contactNo
            }).then(() => {
                navigate('/read')
            })
        }
    return (
        <div>
           <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={fname} onChange={(e) => setFName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Contact Number</label>
                    <input placeholder='Contact Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}