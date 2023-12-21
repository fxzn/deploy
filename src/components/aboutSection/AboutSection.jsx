import "./AboutSection.css";
import about from "../../assets/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChartBar, faCubes, faHeadset, faPercent, faSmileBeam, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";

function AboutSection() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
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
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <FontAwesomeIcon icon={faUser} className="fa fa-user-tie text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Business Planning</h6>
                      <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                    </div>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <FontAwesomeIcon icon={faChartBar} className="fa fa-chart-line text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Financial Analaysis</h6>
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
        <div className="container-xxl py-6">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-4">Why Choose Us? A Trusted & <span>Award-Winning</span> Online Course Platform </h2>
                <p>
                  Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et
                  ipsum kasd
                </p>
                <p>Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
                  Read More
                </a>
              </div>
              <div className="col-lg-7">
                <div className="row g-5">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faCubes} className="fa fa-cubes text-white" />
                      </div>
                      <h6 className="mb-0">Best In Industry</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faPercent} className="fa fa-percent text-white" />
                      </div>
                      <h6 className="mb-0">99% Success Rate</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faAward} className="fa fa-award text-white" />
                      </div>
                      <h6 className="mb-0">Award Winning</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faSmileBeam} className="fa fa-smile-beam text-white" />
                      </div>
                      <h6 className="mb-0">100% Happy Student</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faUserTie} className="fa fa-user-tie text-white" />
                      </div>
                      <h6 className="mb-0">Professional Advisors</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                        <FontAwesomeIcon icon={faHeadset} className="fa fa-headset text-white" />
                      </div>
                      <h6 className="mb-0">24/7 Customer Support</h6>
                    </div>
                    <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos diam dolor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
