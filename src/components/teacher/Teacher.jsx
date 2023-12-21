import "./Teacher.css";
import teacher1 from "../../assets/testi-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Teacher() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
            <h1 className="display-5 w-50 mx-auto">Our Team Members</h1>
          </div>
          <div className="row g-5">
            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
              <div className="rounded team-item">
                <img src={teacher1} className="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
              <div className="rounded team-item">
                <img src={teacher1} className="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
              <div className="rounded team-item">
                <img src={teacher1} className="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
              <div className="rounded team-item">
                <img src={teacher1} className="img-fluid w-100 rounded-top border border-bottom-0" alt="" />
                <div className="team-content bg-primary text-dark text-center py-3">
                  <span className="fs-4 fw-bold">Full Name</span>
                  <p className="text-muted mb-0">Designation</p>
                </div>
                <div className="team-icon d-flex flex-column ">
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
                  </a>
                  <a href="#" className="btn btn-primary border-0 mb-2">
                    <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
                  </a>
                  <a href="#" className="btn btn-primary border-0">
                    <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
