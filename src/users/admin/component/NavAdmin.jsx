import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Style.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import testi1 from "../../../assets/admin.png";

function NavAdmin() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  

  return (
    <>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="" className="sidebar-toggler flex-shrink-0">
          <FontAwesomeIcon icon={faBars} />
        </a>
        <form className="d-none d-md-flex ms-4">
          <input className="form-control border-0" type="search" placeholder="Search" />
        </form>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              <img
                className="rounded-circle me-lg-2 img-fluid"
                src={testi1}
                alt=""
                style={{ maxWidth: 50, maxHeight: 50 }}
              />
              <span className="d-none d-lg-inline-flex">Hi Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="#" className="dropdown-item" onClick={handleLogout}>
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavAdmin;
