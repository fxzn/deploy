import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cardinfo.css";
import { faBookOpenReader, faDollar, faUser } from "@fortawesome/free-solid-svg-icons";
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

      const courseResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/course/getAllCourse`);
      const courses = courseResponse.data.data || [];

      setActiveClasses(courses.length || 0);

      const premiumClassCount = courses.filter((course) => course.isPremium).length;
      setPremiumClasses(premiumClassCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4 content-card">
          <div className="col-sm-6 col-xl-4 ">
            <div className="active-users d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faUser} className="icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <h4 className="mb-0 number">{activeUsers}</h4>
                <p className="mb-2">Active Users</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="active-class d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faBookOpenReader} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <h4 className="mb-0 number">{activeClasses}</h4>
                <p className="mb-2 ">Active Class</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="premium-class d-flex align-items-center justify-content-between p-4">
              <FontAwesomeIcon icon={faDollar} className="fa-3x icon-cardinfo" />
              <div className="ms-3 text-cardinfo">
                <h4 className="mb-0 number">{premiumClasses}</h4>
                <p className="mb-2">Premium Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
