import axios from "axios";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

function EditKelas(props) {
  const { showModal, handleCloseModal, code, setRefresh } = props;

  const [courseData, setCourseData] = useState({
    title: "",
    code: "",
    price: 0,
    levelCourse: "",
    teacher: "",
    isPremium: true,
    linkTelegram: "",
    categories: [
      {
        id: 0,
      },
    ],
    duration: "",
    module: "",
    about: "",
    
  });

  const getCourseByCode = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/course/getByCode?code=${code}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setCourseData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/api/admin/course/update/${code}`, courseData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Data kelas berhasil diperbarui");
        handleCloseModal();
        setRefresh((prevRefresh) => !prevRefresh);
      })
      .catch((error) => {
        console.log("Terjadi kesalahan saat memperbarui kelas:", error);

        if (error.response) {
          console.log("Data respons error:", error.response.data);
          console.log("Kode status HTTP:", error.response.status);
          toast.error(`Gagal memperbarui kelas: ${error.response.data.message}`);
        } else if (error.request) {
          console.log("Tidak ada respons yang diterima:", error.request);
          toast.error("Gagal memperbarui kelas: Tidak ada respons yang diterima");
        } else {
          console.log("Kesalahan lainnya:", error.message);
          toast.error(`Gagal memperbarui kelas: ${error.message}`);
        }
      });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} onShow={getCourseByCode}>
        <Modal.Header closeButton>
          <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Update Kelas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="titleCourse">
              <Form.Label>Title Course</Form.Label>
              <Form.Control type="text" name="title" value={courseData.title || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="codeCourse">
              <Form.Label>Code Course</Form.Label>
              <Form.Control type="text" name="code" value={courseData.code || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Control as="select" name="categories" value={courseData.categories[0].id} onChange={handleChange}>
                {courseData.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" name="duration" value={courseData.duration || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="linkTelegram">
              <Form.Label>Link Telegram</Form.Label>
              <Form.Control type="text" name="linkTelegram" value={courseData.linkTelegram || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="module">
              <Form.Label>Modul</Form.Label>
              <Form.Control type="text" name="module" value={courseData.module || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="priceCourse">
              <Form.Label>Price Course</Form.Label>
              <Form.Control type="number" name="price" value={courseData.price || 0} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="levelCourse">
              <Form.Label>Level Course</Form.Label>
              <Form.Control type="text" name="levelCourse" value={courseData.level || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="teacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control type="text" name="teacher" value={courseData.teacher || ""} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="isPremium">
              <Form.Label>Is Premium</Form.Label>
              <Form.Control as="select" name="isPremium" value={courseData.isPremium} onChange={handleChange}>
                <option value={false}>False</option>
                <option value={true}>True</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="aboutCourse">
              <Form.Label>About Course</Form.Label>
              <Form.Control type="text" name="aboutCourse" value={courseData.about} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSaveClick}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditKelas;
