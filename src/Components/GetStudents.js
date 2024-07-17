import React, { useEffect, useState } from 'react';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const GetStudents  =()=>{
    const [record, setRecords]=useState([])
    useEffect(()=>{
       // const token =sessionStorage.getItem('accessToken')
        //setLoading(ture);
        axios.get(`http://localhost:4000/getAllStudents`,{
           /* headers : {
                Authorization:`Bearer ${token}`,
                'Content-Type': 'application/json',
            },*/
        })
        .then(res =>{setRecords(res.data)})
        //.catch(err =>{
           /* if (err.response.status === 403){
                setUnauthorized(true);
            }
        }).finally(()=>{
            setLoading(false);
        })*/

    },[])
    return (

        <div className='table-responsive'>
            <table className="table table-hover">
    
    <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Gender</th>
        </tr>
    </thead>
    
    <tbody>
    
    {record.map((r, i)=>(
    
    
    <tr key ={i}>
      {/* <td>{r.customer_id} </td>*/}
    
    
      <td> {r.firstname}</td>
      <td>{r.lastname} </td>
      <td>{r.gender}  </td>
    
      <td>
    
    
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            Update
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to={`/UpdateStudent/${r._id}`} className="dropdown-item">
                Edit customer
            </Link>
          </Dropdown.Menu>


    
        </Dropdown>





        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
            Delete
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to={`/deleteStudent/${r._id}`} className="dropdown-item">
                Delete customer
            </Link>
          </Dropdown.Menu>


    
        </Dropdown>
    
    
    
    
      </td>
    
    </tr>
    ))}
    
      </tbody>
    
            </table>
    
    
    
    
    
        </div>
    
    
    
    )
    
    
    
    
    }
    
    
    export default GetStudents ;