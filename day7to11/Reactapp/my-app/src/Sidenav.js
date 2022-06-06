import { Link, useNavigate } from "react-router-dom";

function SideNav() {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-3 px-sm-2 px-0 bg-light">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-150">
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li class="nav-item">
              <Link to="/orm" class="nav-link align-middle px-0">
                  <i class="fs-4 bi-house"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">
                    Traniee Management
                  </span>
                </Link>
              </li>
              <li>
              <Link to="/trainerm" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-table"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Trainer Management</span>
                </Link>
              </li>
              <li>
              <Link to="/trainingm" class="nav-link px-0 align-middle">
                  <i class="fs-4 bi-table"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Training Management</span>
                </Link>
              </li>
            </ul>
            <hr />
        
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default SideNav;
