import { Modal, Button } from "react-bootstrap";

const LoginModal = ({ show, handleClose, navigate }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
   
    <Modal.Body className="text-center">
      <p>Please log in to view course details.</p>
    </Modal.Body>
    <Modal.Footer className="d-flex justify-content-center">
      <Button variant="primary" onClick={() => navigate("/auth/login")}>
        Login
      </Button>
    </Modal.Footer>
  </Modal>
  );
};

export default LoginModal;
