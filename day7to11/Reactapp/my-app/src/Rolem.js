
import SideNav from "./Sidenav";
import { Table } from "react-bootstrap";
import Trainee from "./trainee";
function Rolem() {
  return (
    <div>
      <SideNav />
      <div style={{display: "flex",
    position: "relative",
    top: "-200px",left:"300px"}}> 
    <Trainee/>
    </div>
    </div>
  );
}

export default Rolem;
