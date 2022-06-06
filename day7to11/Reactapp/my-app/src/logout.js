import React from "react"
import { Form,Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Login from "./Login";
import { useState } from "react";
import Home from "./Home";
function Logout() {
    const [login, setLogin] = useState(localStorage.getItem("NameL"));
   
  
    //setLogin(localStorage.getItem("Login"))
    return(
      <>
 <a href="/Login" style={{backgroundColor:"Black"}}>Click to login</a>
      </>
        )
    }
    export default Logout;