import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimoni.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import testi1 from "../../assets/testi-1.png";
import testi2 from "../../assets/testi-2.png";
import testi3 from "../../assets/testi-3.png";

function Testimoni() {
  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <p className="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
            <h1 className="display-5 mb-5">What Our Clients Say!</h1>
          </div>
          <OwlCarousel className="owl-theme testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" {...options}>
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img  className="img-fluid w-50 rounded-circle mx-auto mb-5" src={testi1} alt="Testimonial 1" />
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name 1</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img className="img-fluid rounded-circle mx-auto mb-5" src={testi2} alt="Testimonial 2" />
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name 1</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <div className="testimonial-img position-relative">
                <img className="img-fluid rounded-circle mx-auto mb-5" src={testi3} alt="Testimonial 3" />
              </div>
              <div className="testimonial-text text-center rounded p-4">
                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                <h5 className="mb-1">Client Name 1</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Testimoni;
