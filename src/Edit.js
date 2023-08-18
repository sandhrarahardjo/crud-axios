import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const {id} = useParams();
  const [data, setData] = useState([])
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('https://64dc3b32e64a8525a0f64c9f.mockapi.io/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])

  function handleSubmit(event) {
    event.preventDefault()
    axios.put('https://64dc3b32e64a8525a0f64c9f.mockapi.io/users/' +id, data)
    .then(res => {
        alert("Data Updated Successfully");
        navigate('/')
    })
  }
  
  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className= 'w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">ID:</label>
            <input type = "text" name ='name' value={data.id} className='form-control'
            onChange={e => setData({...data, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" name='name' value={data.name} className='form-control'
            onChange={e => setData({...data, name: e.target.value})}/>
          </div><br />
          <button className='btn btn-info'>Update</button>
          </form>
        </div>
    </div>
    )
}

export default Edit;