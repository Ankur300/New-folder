import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';


export default function Tranier() {
    let navigate=useNavigate();  
    const [users, setUsers] = useState([]);


    const getData = async () => {
        try {
            const res = await axios.get('https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/');
            if (res.data) {
                setUsers(res.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }



    useEffect(() => {
        getData();
    }, []);


    const renderRow = (data) => {
       
        return (
            
            <tr key={data.traineeId}>
                <td>{data.traineeId}</td>
                <td>{data.traineeName}</td>
              {/*   <td>{data.traineeEmail}</td>
                <td>{data.traineePassword}</td> */}
                <td>{data.clientName}</td>
                <td>
                    <Link to={`/edit/${data.traineeId}`}><Button variant="warning">Edit</Button></Link>
                 
                    <Link to="" onClick={() => deleteTrainee(data.traineeId)}><Button variant="danger">Delete</Button></Link>
                    <Link to={`/mored/${data.traineeId}`}><Button variant="secondary">More Details</Button></Link>
                    <Link to=""><Button variant="secondary">Users</Button></Link>
                </td>
            </tr>
        );
    }

function  mored(data){
    console.log("abc")
    
    navigate('/moredetails')  
    }

    const deleteTrainee = async (id) => {
        const res = await axios.delete(`https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/${id}`);
        if (res.status === 200) {
            getData();
        }
    }



    return (
        <div class='m-3 d-flex flex-column align-items-stretch justify-content-center'>
            <div class='m-3 d-flex flex-row justify-content-between'>
                <div>
                    <h5>Detail List</h5>
                </div>
                <div>
                    <Link to='/trainee'>
                        <Button variant="primary" type="submit">Add</Button>
                    </Link>
                </div>
            </div>
            <div class='d-flex justify-content-center align-items-center m-2 table'>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                          {/*   <th>E-mail</th>
                            <th>Password</th> */}
                            <th>Client Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => renderRow(user))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
