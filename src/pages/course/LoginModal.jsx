
import { Modal, Button } from "react-bootstrap";

const LoginModal = ({ show, handleClose, navigate }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please log in to view course details.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;