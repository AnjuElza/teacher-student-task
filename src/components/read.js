import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link }  from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://644e6a264e86e9a4d8f8143f.mockapi.io/student_details`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { id, fname, address, contactNo} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('FName', fname);
        localStorage.setItem('Address', address);
        localStorage.setItem('ContactNo', contactNo)
}

  const getData = () => {
    axios.get(`https://644e6a264e86e9a4d8f8143f.mockapi.io/student_details`)
        .then((getData) => {
             setAPIData(getData.data);
             console.log(APIData);
         })
}
const onDelete = (id) => {
    axios.delete(`https://644e6a264e86e9a4d8f8143f.mockapi.io/student_details/${id}`)
 .then(() => {
    getData();
})
}
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Contact Number</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.fname}</Table.Cell>
           <Table.Cell>{data.address}</Table.Cell>
           <Table.Cell>{data.contactNo}</Table.Cell>
           <Link to='/update'>
            <Table.Cell> 
            <Button onClick={() => setData(data)}>Update</Button>
            </Table.Cell>
            </Link>
            <Table.Cell>
   <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
        </Table.Row>
   )})}
</Table.Body>
            </Table>
        </div>
    )
}
