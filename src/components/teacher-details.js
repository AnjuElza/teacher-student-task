
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link }  from 'react-router-dom';

export default function TeacherDetails() {
    const [APIData1, setAPIData1] = useState([]);
    useEffect(() => {
        axios.get(`https://644e6a264e86e9a4d8f8143f.mockapi.io/teachers_details`)
            .then((response) => {
                setAPIData1(response.data);
            })
    }, [])
    const setData1 = (data) => {
        let { id1, fName1, subject1, contactNo1} = data;
        localStorage.setItem('ID1', id1);
        localStorage.setItem('FName1', fName1);
        localStorage.setItem('Subject', subject1);
        localStorage.setItem('ContactNo', contactNo1)
}

  const getData1 = () => {
    axios.get(`https://644e6a264e86e9a4d8f8143f.mockapi.io/teachers_details`)
        .then((getData1) => {
             setAPIData1(getData1.data);
             console.log(APIData1);
         })
}
const onDelete = (id1) => {
    axios.delete(`https://644e6a264e86e9a4d8f8143f.mockapi.io/teachers_details/${id1}`)
 .then(() => {
    getData1();
})
}
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Subject</Table.HeaderCell>
                        <Table.HeaderCell>Contact Number</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
  {APIData1.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.FName1}</Table.Cell>
           <Table.Cell>{data.subject1}</Table.Cell>
           <Table.Cell>{data.contactNo1}</Table.Cell>
           <Link to='/update-teacher-details'>
            <Table.Cell> 
            <Button onClick={() => setData1(data)}>Update</Button>
            </Table.Cell>
            </Link>
            <Table.Cell>
   <Button onClick={() => onDelete(data.id1)}>Delete</Button>
</Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}
