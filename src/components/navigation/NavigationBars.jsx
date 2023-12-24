import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faHistory, faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { faBell, faTrashCan, faUser } from "@fortawesome/free-regular-svg-icons";

function NavigationBars() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete("http://easy-class-407401.et.r.appspot.com/api/user/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Account deleted successfully");
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
      } else {
        toast.error("Failed to delete account");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {

      setShowConfirmationModal(false);
    }
  };

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
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white py-2">
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
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-3 ">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/course" className="nav-link mx-3" >
                    Course
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link mx-3" >
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
                            e.preventDefault();
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                            navigate("/");
                          }}
                        >
                          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Log Out
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={handleDeleteClick}>
                          <FontAwesomeIcon icon={faTrashCan} className="icon" /> Delete Account
                        </NavDropdown.Item>

                        {/* Modal Konfirmasi */}
                        <Modal show={showConfirmationModal} onHide={handleCancel}>
                          <Modal.Header closeButton>
                            <Modal.Title>Confirmation</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleCancel}>
                              Cancel
                            </Button>
                            <Button variant="danger" onClick={handleConfirmDelete}>
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
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
