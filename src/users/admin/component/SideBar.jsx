import { Link } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faHome, faUserAlt } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const currentPath = window.location.pathname;
  return (
    <>
      <div className="sidebar pe-4 pb-3 ">
        <nav className="navbar-admin navbar-light">
          <Link to={"/admin/dashboard"} className={`navbar-brand ${currentPath === "/admin/dashboard" ? "active-link" : ""}`}>
            <h3 className="text-admin mb-5">easyclass</h3>
          </Link>
          <div className="navbar-nav">
            <Link to="/admin/dashboard" className={`nav-item nav-link item-navbar ${currentPath === "/admin/dashboard" ? "active-link" : ""}`}>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Dashboard
            </Link>
            <Link to="/admin/kelas" className={`nav-item nav-link ${currentPath === "/admin/kelas" ? "active-link" : ""}`}>
              <FontAwesomeIcon icon={faBookBookmark} className="me-2" />
              Kelola Kelas
            </Link>
            <Link to="/admin/user" className={`nav-item nav-link ${currentPath === "/admin/user" ? "active-link" : ""}`}>
              <FontAwesomeIcon icon={faUserAlt} className="me-2" />
              Users
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideBar;