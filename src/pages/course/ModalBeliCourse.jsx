import PropTypes from "prop-types";
import { Modal, Button, Card } from "react-bootstrap";
import { faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Detailcourse.css";



function ModalBeliCourse({ showModal, handleCloseModal, title, level, duration, module, teacher, price, about}) {
  const navigate = useNavigate();

  const handlBuyClick = () => {
    navigate(`/course/payment/${title}`);
  };


  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header className="justify-content-center">
        <div className="headermodal text-center">
          <p>
            Selangkah lagi menuju <span className="text-danger">kelas premium</span>
          </p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="contentModal">
            <Card className="modalkotakcourse">
              <Card.Img className="img-card" variant="top" src={imgcourse} />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div className="title ">{title}</div>
                  <div className="rating d-flex ">
                    <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                    <p className="text-rating">4.5</p>
                  </div>
                </div>

                <Card.Text>
                  <div className="desc mt-1 fw-bold">{about}</div>
                  <div>by {teacher}</div>
                </Card.Text>
                <div className="d-flex infocourse">
                  <div className="level me-4 d-flex">
                    <div>
                      <FontAwesomeIcon icon={faStar} className="img" />
                    </div>
                    <p className="ms-1 mt-1">{level}</p>
                  </div>
                  <div className="level me-4 d-flex">
                    <div>
                      <FontAwesomeIcon icon={faBook} className="img" />
                    </div>
                    <p className="ms-1 mt-1">{module}</p>
                  </div>
                  <div className="level me-4 d-flex">
                    <div>
                      <FontAwesomeIcon icon={faClock} className="img" />
                    </div>
                    <p className="ms-1 mt-1">{duration}</p>
                  </div>
                </div>
                <Button variant="success">
                  Beli Rp. {price}
                </Button>
              </Card.Body>
            </Card>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handlBuyClick}>
          Beli Sekarang
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Add prop types validation
ModalBeliCourse.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  module: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default ModalBeliCourse;
