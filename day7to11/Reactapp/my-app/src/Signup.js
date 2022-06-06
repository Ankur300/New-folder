import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Contactus from './Contactus';
import Button1  from './Button';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";



import { Button, Col, Row, Form } from "react-bootstrap";
 
  function SignUp() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [oldPasswordError, setOldPasswordError] = useState("Re-enter password");
  
    let navigate = useNavigate();
  
    function handleChange(e) {
      e.preventDefault();
      alert("Form values will be reset");
  
      setFirstName("");
      setEmail("");
      setPhoneNumber("");
      setNewPassword("");
      setLastName("");
      setGender("");
      setOldPassword("");
      setDOB("");
      setOldPasswordError("Re-enter password");
    }
    function handleSubmit(e) {
      e.preventDefault();
      if (!oldPassword || newPassword !== oldPassword) {
        setOldPasswordError("Confirm password should match with the password");
      } else {
        try {
          axios
            .post(
              "https://javamongouserbrilliotraining.herokuapp.com/api/v2/user/saveUser",
              {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                dob: dob,
                gender: gender,
                newPassword: newPassword,
                oldPassword: oldPassword,
              }
            )
            .then((response) => {
              if (response.status == 200 || response.status == 201) {
                console.log("Successfully signed up!");
                navigate("/login");
              }
            })
            .catch((error) => {
              alert("User already exist");
            });
        } catch (error) {
          console.error(error);
        }
      }
    }
    return (
      <div className="sign-up">
<h2>Registration Form</h2>        
        <Form style={{ margin: "0 30%" }}>
          <Form.Group as={Row} controlId="form.email1" className="mb-3">
            <Form.Label column sm={4}>
              Email Address
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="firstname@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.firstName" className="mb-3">
            <Form.Label column sm={4}>
              First Name
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Enter firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.lastName" className="mb-3">
            <Form.Label column sm={4}>
              Last Name
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.phoneNumber" className="mb-3">
            <Form.Label column sm={4}>
              Phone Number
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Enter phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.dob" className="mb-3">
            <Form.Label column sm={4}>
              DOB
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="date"
                name="dob"
                value={dob}
                placeholder="Enter DOB"
                onChange={(e) => setDOB(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.gender" className="mb-3">
            <Form.Label column sm={4}>
              Gender
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                name="gender"
                value={gender}
                placeholder="Enter gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.newPassword" className="mb-3">
            <Form.Label column sm={4}>
              Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="newpassword"
                name="newPassword"
                value={newPassword}
                placeholder="Enter New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form.oldPassword" className="mb-3">
            <Form.Label column sm={4}>
              Confirm Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="oldpassword"
                name="oldPassword"
                value={oldPassword}
                placeholder="Re-enter Password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <div style={{ fontSize: "15px", textAlign: "left" }}>
            <Button variant="danger" onClick={handleChange}>
              Cancel
            </Button>
            <Button
              variant="success"
              onClick={handleSubmit}
              style={{ float: "right" }}
            >
              Submit
            </Button>
          </div>
          Already Registered?<Link to="/login">Login</Link>
        </Form><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
  export default SignUp;
  
  
  
  
  
  
  