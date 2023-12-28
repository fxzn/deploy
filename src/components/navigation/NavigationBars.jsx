import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHistory, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

function NavigationBars() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      nav.classList.add("drop-shadow");
    } else {
      nav.classList.remove("drop-shadow");
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top py-2">
        <div className="container px-2">
          <Link to="/" className="navbar-brand">
            <span className="fw-bolder text-dark">easyclass</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="navbarSupportedContent" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                easyclass
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body mb-2">
              <ul className="navbar-nav mx-auto mb-1 mb-lg-0 small fw-bolder">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-3">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/course" className="nav-link mx-3" href="index.html">
                    Course
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link mx-3" href="projects.html">
                    About
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                {isLoggedIn ? (
                  <>
                    <Link to="/courserun" className="btn btn-kelas">
                      <FontAwesomeIcon className="icon-bars me-2" icon={faBars} />
                      Kelas
                    </Link>
                    <Link to="/Notifikasi" className="notif-bell">
                      <FontAwesomeIcon icon={faBell} />
                    </Link>
                    <div className="profil">
                      <NavDropdown title={<FontAwesomeIcon icon={faUser} />} className="icon-user" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/userprofile">
                          <FontAwesomeIcon icon={faUser} className="icon" /> Profil Saya
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/ChangePass">
                          <FontAwesomeIcon icon={faLock} className="icon" /> Ubah Password
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/History">
                          <FontAwesomeIcon icon={faHistory} className="icon" /> History Pembayaran
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor link behavior
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                            navigate("/");
                          }}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Log Out
                        </NavDropdown.Item>

                      </NavDropdown>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/auth/login" className="btn btn-navbar">
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBars;
