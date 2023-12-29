import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavAdmin from "../component/NavAdmin";
import CardInfo from "../component/CardInfo";

function TabelUser() {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourseList() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/user/getAllUser`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser(response.data.data);
        setLoading(false); 
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
        setLoading(false); 
      }
    }
    getCourseList();
  }, [refresh]);

  const handleDelete = async (username) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/admin/user/deleteUserForAdmin/${username}`);

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
        <NavAdmin />
        <CardInfo />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h3 className="mb-4">User Active</h3>
                <div className="table-responsive">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Username </th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">City</th>
                          <th scope="col">Country</th>
                          <th scope="col">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user && user.length > 0 ? (
                          user.map((user, index) => (
                            <tr key={index}>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.phoneNumber}</td>
                              <td>{user.city}</td>
                              <td>{user.country}</td>

                              <td>
                                <div>
                                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(user.username)}>
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
    </>
  );
}

export default TabelUser;
