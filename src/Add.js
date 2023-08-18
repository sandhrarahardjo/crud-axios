import React, {useState} from "react";  
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add(){
  const[inputData, setInputData] = useState({id:'', title:''})
    
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()

    axios.post('https://64dc3b32e64a8525a0f64c9f.mockapi.io/users/', inputData)
    .then(res =>{
        alert("Data Added Successfully")
        navigate('/');
    }).catch(err => console.log(err));
}

  return(
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className= 'w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="name">ID:</label>
              <input type = "text" name ='name' className='form-control'
              onChange={e=>setInputData({...inputData, id: e.target.value})}/>
          </div>
          <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-control'
          onChange={e=>setInputData({...inputData, name: e.target.value})}/>
          </div><br />
          <button className='btn btn-info'>Submit</button>
          </form>
        </div>
    </div>  
  )
}

export default Add;