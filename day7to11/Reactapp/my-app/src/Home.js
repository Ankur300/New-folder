import React from "react"
import { Button,Container,Row,Col } from "react-bootstrap";
import SideNav from "./Sidenav";
import { useNavigate } from "react-router-dom";
function Home() {
let navigate=useNavigate();
console.log(localStorage.getItem("Login"))
  if(localStorage.getItem("Login")==0)
{
  console.log("value is " + (localStorage.getItem("Login")));
  navigate('/login')    
}

    return (

        <>
            {/* <div style={{ backgroundColor: "Yellow", width: "1300px", height: "300px", display:"grid" }}
            >

            
              <div style={{ backgroundColor: "Indigo", width: "250px", height: "300px" }}>
                <div className="d-flex flex-column  my-2" style={{ position: "absolute", alignContent: "left" }}>
                    <div >
                        <Button variant="dark " className="col-12 mt-3">Organistation Management</Button></div>
                    <div>
                        <Button variant="primary " className="col-12 mt-3" >Role management</Button></div>
                    <div>
                        <Button variant="secondary " className="col-12 mt-3" >User management</Button></div>
                </div>
                    
                
                
                </div>
                <div className="conatainer">
                <span><h1>Help Component</h1></span>  </div>
            
            </div> */}

{/* <Container style={{ backgroundColor: "grey" }}>
  <Row>
    <Col sm={4} style={{ backgroundColor: "Grey" }}>Organisation management </Col>
    <Col sm={8} style={{ backgroundColor: "Grey" }}>Organisation list </Col>
  
  </Row>
  <Row style={{ backgroundColor: "grey  " }}>
  <Row>
  <Col sm={4} style={{ backgroundColor: "Grey" }}>Role management </Col>
  
  <Col sm={8} style={{ backgroundColor: "grey" }}>

  <table style={{ backgroundColor: "Aqua" }}>
  <tr>
    <td> Amit</td>

    <td>1</td>
    <td>30.02</td>
  </tr>
  <tr>
    <td>Ankur</td>
 
    <td>2</td>
    <td>52.9</td>
  </tr>
  <tr>
    <td> Manaoj</td>

    <td>1</td>
    <td>22.23</td>
  </tr>
  <tr>
    <td> Sunil</td>
   
    <td>1</td>
    <td>30.17</td>
  </tr>
</table>
  </Col>
  </Row>
  <Row>
  <Col sm={4} style={{ backgroundColor: "Grey" }}>User management </Col>
 
  </Row>
  
  </Row>
</Container> */}
{localStorage.getItem("Login")==1?

<SideNav/>  :<div></div>
}
















        </>


    )
}
export default Home;