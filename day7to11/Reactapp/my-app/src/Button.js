import Mainproduct from "./Mainproduct";
import Subproduct from "./Subproduct";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Button1(props) {
    let navigate=useNavigate();
//const hello = "Hello World Application";
/* if(props.check){
    console.log(props.check)
return <Mainproduct/>
}
return <Subproduct/>
} */
return(
<>
<Button variant = "success"  onClick={()=>navigate('/login')} className="mb-3 col-4 mr-4">Login</Button>{' '}
</>
    )
}
export default Button1;