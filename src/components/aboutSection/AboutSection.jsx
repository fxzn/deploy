import "./AboutSection.css";
import about from "../../assets/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";



function AboutSection() {
  return (
    <>
      <div className="container-xxl  p-0">
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                <img className="img-fluid" src={about}/>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-inline-block px-4 mb-3"></div>
                <h2 className="mb-4">Explore Your Potential Anywhere With Us!</h2>
                <p className="mb-4">
                Explore your potential through transformative journeys. Every step paints a canvas of self-discovery. Embrace challenges as opportunities, 
                shaping your unique narrative. Unleash the power within; evolve into your best self.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <FontAwesomeIcon icon={faUser} className="fa fa-user-tie text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Best Teacher</h6>
                      <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                    </div>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <FontAwesomeIcon icon={faBook} className="fa fa-chart-line text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Interesting Video</h6>
                      <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
