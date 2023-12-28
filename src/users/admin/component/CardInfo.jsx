import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cardinfo.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function CardInfo() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [activeClasses, setActiveClasses] = useState(0);
  const [premiumClasses, setPremiumClasses] = useState(0);

  const fetchData = async () => {
    try {
      const userResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/user/getAllUser`);
      
      setActiveUsers(userResponse.data.data.length || 0);

      // Fetch course data
      const courseResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/course/getAllCourse`);
      const courses = courseResponse.data.data || [];

      setActiveClasses(courses.length || 0);

      const premiumClassCount = courses.filter(course => course.isPremium).length;
      setPremiumClasses(premiumClassCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4 content-card">
          <div className="col-sm-6 col-xl-4 ">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2">Active Users</p>
                <h6 className="mb-0">{activeUsers}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2 ">Active Class</p>
                <h6 className="mb-0">{activeClasses}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card-info rounded d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <p className="mb-2">Premium Class</p>
                <h6 className="mb-0">{premiumClasses}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
