import SideNav from "./Sidenav";
import Tranier from "./Trainer";
function Trainerm() {
  return (
    <div>
      <SideNav />
      <div style={{display: "flex",
    position: "relative",
    top: "-200px",left:"300px"}}> 
     <Tranier />
     </div>
 
  
    </div>
  );
}

export default Trainerm;
