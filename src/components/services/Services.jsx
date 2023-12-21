import "./Services.css";
import react from '../../assets/react.js.png'; 
import laravel from '../../assets/laravel.png'; 
import kotlin from '../../assets/kotlin.png'; 


function Services() {
  return (
    <>
      <section className="services text-center">
        <div className="container">
          <span className="text-primary">Services</span>
          <h2 className="fw-bold text-dark ">Our top courses</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={1000}>
              <img src={react} alt="React Logo" />
              <h5 className="services-title text-dark mt-4">React.js</h5>
              <p className="text-secondary mt-3">Explore React.js with us, covering both the basics and advanced concepts in a friendly and concise journey!</p>
            </div>
            <div className="col-lg-4 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={2000}>
              <img className="kotlin-logo" src={kotlin} alt="Express Logo" />
              <h5 className="services-title text-dark mt-4">Kotlin</h5>
              <p className="text-secondary mt-3">Create your awesome apps effortlessly with Kotlin where modern, concise, and expressive meet friendly development</p>
            </div>
            <div className="col-lg-4 col-md-6 content-services mt-5" data-aos="fade-up" data-aos-duration={3000}>
              <img src={laravel} alt="Laravel Logo" />
              <h5 className="services-title text-dark mt-4">Laravel</h5>
              <p className="text-secondary mt-3">Create awesome web applications effortlessly with Laravel where building powerful and friendly projects becomes a breeze!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
