import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import React, { useEffect,useState } from 'react';
import { useNavigate,useParams,Outlet } from "react-router-dom";
import Contactus from './Contactus';
import Mainproduct from './Mainproduct';
import Subproduct from './Subproduct';
import Button from 'react-bootstrap/Button';
import AHeader from './AHeader';
import {Routes,Link, Route }from "react-router-dom";
import Signup from './Signup';
import Help from './Help';
import Login from './Login';
import Home from './Home';
import axios from 'axios';
import Userm from './Userm';
import Trainingm from './Traningm';
import Orm from './Orm';
import Rolem from './Rolem';
import Logout from './logout';
import Trainee from './trainee';
import Traineelist from './traineelist';
import Edit from './Edit';
import Mored from './Moredetails'
import Tranier from './Trainer';
import Trainerm from './Trainerm';
//import Invoice from './invoice';
/* function Home() {
  return <h2>Home</h2>;
  }
  function About() {
  return <h2>About</h2>;
  }*/
  function Users() {
  
const [datafromApi,setDatafromApi] = useState({});



 
 useEffect(async ()=>{try {
   const data = await axios.get('/api/v1/trainee/') 
   setDatafromApi(data);
   console.log(data)
   console.log("Data from API",data.data[0].traineeName); }catch (error) {console.error(error) }
  },[])


    const userData = [
      {
      "id":"1",
      "name":"Manan"
      },
      {
      "id":"2",
      "name":"Jindal"
      },
      {
      "id":"3",
      "name":"Ankit"
      },{
      "id":"4",
      "name":"Mangat"
      }
      ]
  return (
  <>
  {userData.map((item,index)=>(
    <p key={item.id}>{item.name}</p>
    ))}

<p>{datafromApi.subscriptions_url}</p>
{datafromApi.type=="User"?<p>{datafromApi.name}</p>:"Hello String"}
</>
)
  } 

  function Invoices() {
    return (
    <div>
    <h1>Invoices</h1>
    <Outlet/>
    </div>
    );
    }
    function Invoice() {
    let { invoiceId } = useParams();
    return <h1>Invoice {invoiceId}</h1>;
    }
    function SentInvoices() {
    return <h1>Sent Invoices</h1>;
    }

function App() {
  let navigate = useNavigate();

  
  

  const [name1, setName] = useState("");
  function handleChange (e) {
    setName(e.target.value)
  }
  return (
    <>
    <nav>
{/* <Link to="/about">About</Link> */}
</nav>
  
    <div className="App">
     {/* <form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" onChange={handleChange}></input><br></br>
 <p>Name entered <b>{name1}</b></p>
 <Button variant="primary">Button #1</Button>
</form> */}
 
<AHeader/>
<Routes>
   {/*  <Route path="/" element={<Home />} /> 
 
 <Route path="users" element={<Users />} />  */}
 <Route path="Signup" element={<Signup />} /> 
 <Route path="trainer" element={<Tranier />} /> 
 <Route path="trainerm" element={<Trainerm />} /> 
 <Route path="trainingm" element={<Trainingm />} /> 
 <Route path="contact" element={<Contactus />} /> 
 <Route path="mored/:editId" element={<Mored />} />
 <Route path="help" element={<Help />} /> 
 <Route path="login" element={<Login />} /> 
 <Route path="home" element={<Home />} /> 
 <Route path="rolem" element={<Rolem />} /> 
 <Route path="userm" element={<Userm />} /> 
 <Route path="user" element={<Users />} /> 
 <Route path="orm" element={<Orm />} /> 
 <Route path="logout" element={<Logout />} /> 
  <Route path="trainee" element={<Trainee/>} /> 
  <Route path="traineelist" element={<Traineelist/>} /> 
  

 <Route path="edit/:editId" element={<Edit />} /> 
<Route path="invoices" element={<Invoices />}>
<Route path=":invoiceId" element={<Invoice />} />
<Route path="sent" element={<SentInvoices />} />

</Route>



 </Routes>

<Contactus/>
 
    </div>
    </>
  );
}

/* import React, { useState } from 'react';
function App() {
const [followers, setFollowers] = useState(10);
return (
<div>
<p>You have {followers} followers</p>
<button onClick={() => setFollowers(followers+ 1)}>Follow</button>
<button onClick={() => setFollowers(followers- 1)}>Not to be a follower</button>
</div>
);
} */

export default App;
