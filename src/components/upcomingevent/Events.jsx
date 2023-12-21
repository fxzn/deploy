import "./Event.css";
import event1 from '../../assets/event-1.png'; 
import event2 from '../../assets/event-2.png'; 
import event3 from '../../assets/event-3.png'; 
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <div className="container-fluid event py-5">
        <div className="container py-5">
          <h1 className="display-6 mb-5 wow fadeIn" data-wow-delay="0.1s">
            Upcoming <span className="text-span">Events</span>
          </h1>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.1s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>01 Jan 2045</h6>
                <p className="mb-0">Fri 06:55</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">UI/UX Design For The Future</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in
                </p>
                <Link to={'/'} className="btn btn-primary px-3">
                  Join Now
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={event1} alt="event-1" className="img-fluid w-100" />
              </div>
            </div>
          </div>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.3s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>01 Jan 2045</h6>
                <p className="mb-0">Wed 11:30</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Blockchain</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in
                </p>
                <Link to={'/'} className="btn btn-primary px-3">
                  Join Now
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={event2} className="img-fluid w-100" alt="event-2" />
              </div>
            </div>
          </div>
          <div className="row g-4 event-item wow fadeIn" data-wow-delay="0.5s">
            <div className="col-3 col-lg-2 pe-0">
              <div className="text-center border-bottom border-dark py-3 px-2">
                <h6>01 Jan 2045</h6>
                <p className="mb-0">Thu 11:30</p>
              </div>
            </div>
            <div className="col-9 col-lg-6 border-start border-dark pb-5">
              <div className="ms-3">
                <h4 className="mb-3">Cloud Computing</h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in
                </p>
                <Link to={'/'} className="btn btn-primary px-3">
                  Join Now
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="overflow-hidden mb-5">
                <img src={event3} className="img-fluid w-100" alt="event-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
