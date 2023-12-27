import CardInfo from "../component/CardInfo";
import NavAdmin from "../component/NavAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Tabelkelola.css";
import AddData from "../crud/AddData";
import EditKelas from "../crud/EditKelas";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function TabelKelas() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [kelasData, setKelasData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [refresh, setRefresh] = useState(false); 

  useEffect(() => {
    async function getCourseList() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setKelasData(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getCourseList();
  }, [refresh]);

  const handleTambahClick = () => {
    setShowModal(true);
  };

  const handleEditClick = (code) => {
    setSelectedCourse(code);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditModal(false);
  };

  const handleDelete = async (codeCourse) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/admin/course/delete/${codeCourse}`);

      if (response.status === 200) {
        toast.success("Course deleted successfully");
        setRefresh((prevRefresh) => !prevRefresh); 
      } else {
        toast.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="content">
        <NavAdmin/>
        <CardInfo/>
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Kelola Kelas</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3" onClick={handleTambahClick}>
                    Tambah
                    <FontAwesomeIcon icon={faPlus} className="ms-2" />
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Kode Kelas</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Nama Kelas</th>
                        <th scope="col">Tipe Kelas</th>
                        <th scope="col">Level</th>
                        <th scope="col">Harga Kelas</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelasData && kelasData.length > 0 ? (
                        kelasData.map((course, index) => (
                          <tr key={index}>
                            <td>{course.code}</td>
                            <td>{course.categories && course.categories.length > 0 ? course.categories.map((category) => category.categoryName).join(",") : "No category"}</td>
                            <td>{course.title}</td>
                            <td>{course.isPremium ? "Premium" : "Free"}</td>
                            <td>{course.level}</td>
                            <td>Rp. {course.price.toLocaleString("id-ID", {currency: "IDR"})}</td>
                            <td>
                              <div>
                                <button type="button" className="btn btn-edit" onClick={() => handleEditClick(course.code)}>
                                  <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button type="button" className="btn btn-delete" onClick={() => handleDelete(course.code)}>
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <TabelVideo/> */}
      <EditKelas showModal={showEditModal} handleCloseModal={handleCloseModal} selectedCourse={selectedCourse} code={selectedCourse} setRefresh={setRefresh}/>
      {showModal && <AddData showModal={showModal} handleClose={handleCloseModal} setRefresh={setRefresh} />}
    </>
  );
}

export default TabelKelas;
