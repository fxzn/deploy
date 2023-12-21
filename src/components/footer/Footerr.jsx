import "./Footer.css";

function Footerr() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <div className="col-md-10">
                <a className="footer-brand">
                  <span className="text-dark">easyclass</span>
                  <p className="text-secondary mt-3">EasyClass is your go-to destination for online courses! Delve into a feast of knowledge, serving you the finest educational experiences with top-notch quality since its inception.</p>
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-content">
                    <span>Top </span>
                    <ul className="footer-link mt-3 list-unstyled">
                      <li>
                        <a href="#" className="py-1 d-block">
                          React.js
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          Kotlin
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          Laravel
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-content">
                    <span>Info</span>
                    <ul className="footer-link mt-3 list-unstyled">
                      <li>
                        <a href="#" className="py-1 d-block">
                          Promo date
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          Event
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="footer-content">
                    <span>Contact</span>
                    <ul className="footer-link mt-3 list-unstyled">
                      <li>
                        <a href="#" className="py-1 d-block">
                          South Jakarta - Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          +0628-2267-9981
                        </a>
                      </li>
                      <li>
                        <a href="#" className="py-1 d-block">
                          contact@easyclass.co.id
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <p className="copyright text-secondary text-center">
              Copyright © 2023 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footerr;
