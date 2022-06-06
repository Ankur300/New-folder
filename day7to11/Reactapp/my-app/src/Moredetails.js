import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
function Mored(props) {
  const [datafromApi,setDatafromApi] = useState({});

  let  eid  = useParams();
        console.log(eid.editId);


 
  useEffect(async ()=>{try {

    const data = await axios.get(`https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/findBYId/${eid.editId}`) 
    setDatafromApi(data.data);
 
    console.log("Data from API",datafromApi.traineeId); }catch (error) {console.error(error) }
   },[])
  return (
    <div className="container" style={{backgroundColor:"Gold"}}>
<h3>Traninee Name:{datafromApi.traineeName}</h3>
<h3>Traninee ID:{datafromApi.traineeId}</h3>
<h3>Traninee Password:{datafromApi.traineePassword}</h3>
<h3>Traninee Email:{datafromApi.traineeEmail}</h3>
<h3>Client Name:{datafromApi.clientName}</h3>
     </div>
 
  
 
  );
}

export default Mored;
