import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


export default function Tranieelist() {
    let navigate=useNavigate();  
    const [users, setUsers] = useState([]);
    const[tvisible,setTvisible]=useState([]);
    const[dsearch,setDsearch]=useState([]);

    const getData = async () => {
        try {
            setTvisible(true);
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

    const renderSRow = (data) => {
        let abc=data.traineeName;
        let bcd=dsearch;
        console.log("abc" +abc);
        console.log("bcd"+bcd)
var def =abc.includes(bcd);
console.log(def)
        return (
            <div>
            {def == true  ?          
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
        :<h1></h1>    
        }
        </div>
        );
    }






/* function  mored(data){
    console.log("abc")
    
    navigate('/moredetails')  
    } */

    const deleteTrainee = async (id) => {
        const res = await axios.delete(`https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/${id}`);
        if (res.status === 200) {
            getData();
        }
    }

   const handlesearch=(e)=>{
        var Tname=e.target.value
        setDsearch(Tname);
console.log(Tname); 
console.log(Tname.length)
if(Tname.length>0){
setTvisible(false);
}
else{
    setTvisible(true);
}

console.log(tvisible);
    }



    return (
        <div class='m-3 d-flex flex-column align-items-stretch justify-content-center'>
            <div class='m-3 d-flex flex-row justify-content-between'>
                <div>
                    <h5>Detail List</h5>
                </div>
                <div>
                    <Link to='/trainee'>
                        <Button variant="primary"  type="submit" className="">Add</Button>
                    </Link>
                    <Form onChange={handlesearch}>
                    <Form.Group className="d-flex mt-3 mr-1" controlId="tname">
                        <Form.Control type="Search" placeholder="Search name"  />

                    </Form.Group>

          
     
          </Form>
                </div>
            </div>
            <div class='d-flex justify-content-center align-items-center m-2 table'>
            {tvisible==true
              ?  <table className="table table-dark">
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
                </table>:<table className="table table-dark">
                    <thead>
                      
                    </thead>
                    <tbody>
                        {users.map(user => renderSRow(user))}
                    </tbody>
                </table>
}
            </div>
        </div>
    )
}
