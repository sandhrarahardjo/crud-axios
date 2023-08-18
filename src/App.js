import React, { useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('https://64dc3b32e64a8525a0f64c9f.mockapi.io/users/')
    .then(res => {
        setColumns(Object.keys(res.data[0]))
        setRecords(res.data)
    })
  }, [])

  return(
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">Add</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
          {/* <th>id</th> */}
          <th>name</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        { records.length > 0 ? <>{
          records.map((d, i) => (
            <tr key={i}>
              {/* <td>{d.id}</td> */}
              <td>{d.name}</td>             
              <td>
                <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                <button onClick = {e => handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button>
              </td>
            </tr> 
          ))
        } </> :
          <tr className="no_record text-center">
            <td col={3}>
              <h4>No Data Found</h4>
            </td>
          </tr> 
        }
        </tbody>
      </table>
    </div>
  );
  
function handleSubmit(id){
  const conf = window.confirm("Do you want to delete");
    if(conf){
      axios.delete('https://64dc3b32e64a8525a0f64c9f.mockapi.io/users/'+id)
      .then(res => {
        alert('Data has been deleted')
        navigate('/')
    }).catch(err => console.log(err))
  }
}
}

export default App;