import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Tabelkelola.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditVideo from "../crud/EditVideo";
import AddVideo from "../crud/AddVideo";

function TabelVideo() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [kelasData, setKelasData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCourseList() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/getAllSubject`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setKelasData(response.data.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
        setLoading(false);
      }
    }
    getCourseList();
  }, [refresh]);

  const handleTambahClick = () => {
    setShowModal(true);
  };

  const handleEditClick = (code) => {
    setSelectedVideo(code);
    setShowEditModal(true);
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
    setShowEditModal(false);
  };


  const handleDelete = async (code) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/delete/${code}`);

      if (response.status === 200) {
        toast.success("Video deleted successfully");
        setRefresh((prevRefresh) => !prevRefresh);
      } else {
        toast.error("Failed to delete course");
        setError(`Axios Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h3 className="mb-4">Video</h3>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3" onClick={handleTambahClick}>
                    Tambah
                    <FontAwesomeIcon icon={faPlus} className="ms-2" />
                  </button>
                </div>
                <div className="table-responsive">
                  {loading ? (
                    <p>Loading...</p>
                  ) : error ? (
                    <p>Error: {error}</p>
                  ) : (
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Kode </th>
                          <th scope="col">Judul</th>
                          <th scope="col">Tipe Kelas</th>
                          <th scope="col">Link Video</th>
                          <th scope="col">Deskripsi</th>
                          <th scope="col">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kelasData && kelasData.length > 0 ? (
                          kelasData.map((subject, index) => (
                            <tr key={index}>
                              <td>{subject.code}</td>
                              <td>{subject.title}</td>
                              <td className={`tipe-kelas ${subject.isPremium ? "premium" : "free"}`}>{subject.isPremium ? "Premium" : "Free"}</td>
                              <td>{subject.link}</td>
                              <td>{subject.description}</td>

                              <td>
                                <div>
                                  <button type="button" className="btn btn-edit" onClick={() => handleEditClick(subject.code)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                  </button>
                                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(subject.code)}>
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditVideo showModal={showEditModal} handleCloseModal={handleCloseModal} selectedCourse={selectedVideo} code={selectedVideo} setRefresh={setRefresh} />
      {showModal && <AddVideo showModal={showModal} handleClose={handleCloseModal} setRefresh={setRefresh} />}
    </>
  );
}

export default TabelVideo;
