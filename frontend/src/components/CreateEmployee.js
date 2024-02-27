import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/create', {name, email})
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err)); 
  }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Create Students</h2>
          <div className='mb-3'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Enter Your Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee;
