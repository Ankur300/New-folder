import React from "react"
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle")
   

    setEmail(e.target.formBasicEmail.value);
    setPassword(e.target.formBasicPassword.value);

    try {
      axios
        .post(
          "https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/login",
          {
            email: email,
            password: password,
          }
        )
        .then((response) => {
          if (response.status === 200 || response.status === 201) {

            console.log("Successfully Logged in");
            localStorage.setItem("email", email);
            navigate("/home");
            localStorage.setItem("Login",1);
            localStorage.setItem("Login",0);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }







  /*     var mail=localStorage.getItem("Email");
    
      var pass=localStorage.getItem("Password"); */




  return (
    <div className="container" style={{ backgroundColor: "Grey" }}>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit} >

        <Form.Group className="col-10 align-items-center mt-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email " className="mt-3 " placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="col-10 " controlId="formBasicPassword">
          <Form.Label className="mt-3 ">Password</Form.Label>
          <Form.Control type="password" className="mt-2 mb-2 d-inline align-middle" placeholder="Password" />

        </Form.Group>
        <Button variant="dark mt-4 mb-2 d-inline mx-2 my-4 " >
          Cancel
        </Button>
        <Button variant="primary mt-4 mb-2 d-inline mx-2 my-2" type="submit">
          Submit
        </Button>
        <div>
          <a href="/home" style={{ backgroundColor: "Black" }}>Forgot Password</a>
        </div>

      </Form>
    </div>
  )
}
export default Login;