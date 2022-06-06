import SideNav from "./Sidenav";
import Tranier from "./Trainer";
import Training from "./Training";
function Trainingm() {
  return (
    <div>
      <SideNav />
      <div style={{display: "flex",
    position: "relative",
    top: "-200px",left:"300px"}}> 
     <Training />
     </div>
 
  
    </div>
  );
}

export default Trainingm;
