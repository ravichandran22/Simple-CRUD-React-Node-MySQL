import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Employees = () => {
const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(res => setStudents(res.data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = async (id) => {
    try{
      await axios.delete('http://localhost:5000/students/'+id);
      window.location.reload(); 
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <h1 style={{textAlign: 'center', paddingBottom: 20}}>Employees Management</h1>
      <Link to='/create' className='btn btn-success'>Add Employee</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((data, index) => (
              <tr key={index}>
                <td>{data.NAME}</td>
                <td>{data.EMAIL}</td>
                <td>
                  <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                  <button type='button' className='btn btn-danger ms-2' onClick={(e) => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Employees;
