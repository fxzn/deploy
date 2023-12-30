import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddVideo(props) {
  const { showModal, handleClose, setRefresh } = props;

  const [formData, setFormData] = useState({
    course: {
      id: "",
    },
    code: "",
    title: "",
    linkVideo: "",
    description: "",
    isPremium: true,
  });

  const handleCourseSubmit = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/add`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log(response.data);
      toast.success("Course added successfully");
      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add course");
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Tambah Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="idCourse">
              <Form.Label>ID Course</Form.Label>
              <Form.Control type="text" value={formData.course.id} onChange={(e) => setFormData({ ...formData, course: { id: e.target.value } })} />
            </Form.Group>

            <hr />
            <h5>Subject Details</h5>
            <Form.Group controlId="code">
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="linkVideo">
              <Form.Label>Link Video</Form.Label>
              <Form.Control type="text" value={formData.linkVideo} onChange={(e) => setFormData({ ...formData, linkVideo: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="isPremium">
              <Form.Label>Is Premium</Form.Label>
              <Form.Control as="select" value={formData.isPremium} onChange={(e) => setFormData({ ...formData, isPremium: e.target.value === "true" })}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning">Next Video</Button>
          <Button variant="success" onClick={handleCourseSubmit}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddVideo;
