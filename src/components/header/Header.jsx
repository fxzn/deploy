import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationBars from "../navigation/NavigationBars";
import "./Header.css";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import homeimg from "../../assets/home.png";
import { Link } from "react-router-dom";
import VideoHome from "./VideoHome";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavigationBars />
      <section className="home" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="home-content" data-aos="fade-up" data-aos-duration={1000}>
                <p className="badge fs-6 fw-normal bg-primary-light text-primary">You have to try new things</p>
                <h1 className="text-home-bold fw-bold text-dark mt-1">
                  Best online courses with interesting learning <span className="text-primary-big">videos </span>
                </h1>
                <h4 className="text-home-reguler fw-normal text-secondary">We find concepts that are suitable and suitable for efficient learning of the course so that it is easy to understand the material!</h4>
                <div className="home-btn mt-5">
                  <Link to="/auth/register" className="btn btn-primary shadow-none">
                    Join now
                  </Link>
                  <VideoHome isOpen={isModalOpen} onClose={closeModal} />
                  <a href="#" className="btn btn-video-play" onClick={openModal}>
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </a>
                  <span className="video-play text-dark">Example video</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="home-img" data-aos="fade-up" data-aos-duration={2000}>
                <img src={homeimg} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
