import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button  from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Contactus from './Contactus';
import Button1  from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Traniee() {
 const [traineeid, setTraineeid]=useState("");
 const [traineeName,setTraineeName]=useState("");
 const [traineeEmail,setTraineeEmail]=useState("");
 const [traineePassword,setTraineePassword]=useState("");
 const [clientName,setClientName]=useState("");

  let navigate=useNavigate();
 
 
  function handleSubmit (e) {
    e.preventDefault();
    var Tid=e.target.tid.value
  
    var Tname=e.target.tname.value
    var Temail=e.target.temail.value
    var Tpassword=e.target.tpassword.value
    var Cname=e.target.cname.value
    setClientName(Cname);
    setTraineeEmail(Temail);
    setTraineeName(Tname);
    setTraineePassword(Tpassword);
    setTraineeid(Tid);

    const user=JSON.stringify({traineeId: Tid,
    traineeName: Tname,
    traineeEmail: Temail,
    traineePassword:Tpassword,
    clientName:Cname});
    console.log(user);
    const headers={
        'Acess-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    }
    axios.post("https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/saveTrainee",user,{headers:headers})
    .then((res)=>{
        alert('Details added ');
        console.log(res);
        console.log(res.data);
    });
}
 
  return(
    <>
  
<div className="container" style={{backgroundColor:"Grey",
    }}>

<h3 style={{textAlign:"left"
    }}>Add Trainee details</h3>
<Form onSubmit={handleSubmit}>

<Form.Group className="mb-3 col-6  " controlId="tid">
    <Form.Label>Trainee ID</Form.Label>
    <Form.Control type="text" placeholder="Trainee ID" />

  </Form.Group>
<Form.Group className="mb-3 col-6  " controlId="tname">
    <Form.Label>Traniee Name</Form.Label>
    <Form.Control type="text" placeholder="Trainee Name" />

  </Form.Group>
  <Form.Group className="mb-3 col-6" controlId="temail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3 col-6" controlId="tpassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3 col-6  " controlId="cname">
    <Form.Label>Client Name</Form.Label>
    <Form.Control type="text" placeholder="Client Name" />

  </Form.Group>



  <Form.Group className="mb-3 col-4" >
  <Button variant="primary" className="mb-3 col-4 mr-2 mx-4 "   type="submit">  Submit
  </Button>
    </Form.Group>
  
 {/*  <Button1 onClick={()=>navigate('/login')}>Navigate</Button1> */}
{/*   <Button variant="dark" className="mb-3 col-2 mr-4" onClick={()=>navigate('/login')}> Login
  </Button> */}
</Form>

</div>
</>
);
}

export default Traniee;