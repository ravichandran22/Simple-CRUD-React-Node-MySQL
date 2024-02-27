import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const UpdateEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/update/'+id, {name, email})
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err)); 
  }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className='mb-3'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Enter Your Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type='submit' className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee;
