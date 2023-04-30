import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import TeacherDetails from './components/teacher-details';
import UpdateTeacherdetails from './components/update-teacher-details';
import CreateTeacherDetails from './components/create-teacher-details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link }  from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import React from 'react';


function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Student-Teacher Dashboard</h2>
        <div className='linkButtons'>
        <Link to='/create'>
            <Button>Create Student</Button>
          </Link>
          <Link to='/read'>
          <Button>View Student</Button>
        </Link>
        <Link to='/create-teacher-details'>
            <Button>Create Teacher</Button>
          </Link><br></br>
          <Link to='/teacher-details'>
          <Button>View Teacher</Button>
        </Link>
        </div>
        <Routes> 
      
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
        <Route exact path='/teacher-details' element={<TeacherDetails/>} />
        <Route exact path='/update-teacher-details' element={<UpdateTeacherdetails/>} />
        <Route exact path='/create-teacher-details' element={<CreateTeacherDetails/>} />
        </Routes>
        
      </div>
    </Router>
  );
}
export default App;
