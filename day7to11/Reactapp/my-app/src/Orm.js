import SideNav from "./Sidenav";
import Traineelist from "./traineelist";
function Orm() {
  return (
    <div>
      <SideNav />
      <div style={{display: "flex",
    position: "relative",
    top: "-200px",left:"300px"}}> 
     <Traineelist />
     </div>
 
  
    </div>
  );
}

export default Orm;
