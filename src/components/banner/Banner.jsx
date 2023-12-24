import { Link } from "react-router-dom";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

function Banner() {
  return (
    <>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="container text-center banner py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
              <div className="col-lg-2">
                <FontAwesomeIcon icon={faBrain} className="icon-brain"/>
              </div>
              <div className="col-lg-7 text-banner text-center text-lg-start">
                <h1 className="mb-0">Make your future brighter by "learning" new things all the time</h1>
              </div>
              <div className="col-lg-3">
                <Link to={"/course"} className="btn btn-light py-2 px-4">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
