import React from 'react';
import "./Partner.css";
import ittp from '../../assets/ittp.png'; 
import kotlin from '../../assets/kotlin.png'; 

function Partner() {
  return (
    <>
      <section className="services text-center">
        <div className="container">
          <span className="text-primary">Services</span>
          <h2 className="fw-bold text-dark mt-3">Partner</h2>
          <div className="row">
            <div className="col-lg-2 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={1000}>
              <img className="larger-logo" src={ittp} alt="React Logo" />
            </div>
            <div className="col-lg-2 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={2000}>
              <img className="larger-logo kotlin-logo" src={kotlin} alt="Express Logo" />
            </div>
            <div className="col-lg-2 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={3000}>
              <img className="larger-logo" src={ittp} alt="Laravel Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner;
