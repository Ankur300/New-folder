import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';



function AHeader() {
  let navigate=useNavigate();
 var name=localStorage.getItem("NameL");
/* console.log("name is"+name); */
var login=localStorage.getItem("Login");
var logout=localStorage.getItem("Logout");
function handleSubmit (e) {
  e.preventDefault();
  
localStorage.removeItem("NameL")
localStorage.setItem("Logout", 1);
localStorage.setItem("Login", 0);
  navigate('/logout')    
} 
  return(
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
   
      <Nav.Link href="/home">Home</Nav.Link>
     
     
      {login==1
        ?  <Nav.Link  onClick={handleSubmit}>Logout</Nav.Link>
        : <div></div>
      }
       {logout==1
        ?  <Nav.Link  onClick={()=>navigate('/login')}>Login</Nav.Link>
        : <div></div>
      }





{login==1
        ?      <span style={{width:"40vw",marginLeft:"450px"}}>
        <Button href="/Home" className=" col-4 mx-4  " >{name}</Button>
        </span>
        : <div></div>
      }

     
  
    </Nav>

    </Container>
    <Navbar bg="dark" variant="dark" className='d-flex'>
    <Container>

    </Container>
  </Navbar>
  </Navbar>


<div>

</div>
</>
  );
}

export default AHeader;