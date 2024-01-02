
import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { faSearch, faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import NavigationBars from "../../components/navigation/NavigationBars";
import Footerr from "../../components/footer/Footerr";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function CourseRun() {
  const [loading, setLoading] = useState(true);
  const [myclass, setMyclass] = useState([]);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filterLoading, setFilterLoading] = useState(false);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getCourseOrder`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMyclass(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };
  const handleCardClick = (coursetitle) => {
    navigate(`/detailcourserun/${coursetitle}`);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    if (inputValue === "") {
      reloadData();
    }
  };

  const handleSearch = async () => {
    try {
      if (searchInput) {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/searchingCourseAfterOrder`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            title: searchInput,
          },
        });
        setMyclass(response.data);
      } else {
        reloadData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilter = async (filterType) => {
    try {
      setFilterLoading(true); // Set loading to true when applying filters

      const token = localStorage.getItem("token");
      const newFilter = selectedFilter === filterType ? null : filterType;
      

      let response;
      if (!newFilter) {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/${newFilter}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      

      setSelectedFilter((prevFilter) => (prevFilter === filterType ? null : filterType));
      
      setMyclass(response.data);
    } catch (error) {
      console.error("Filter Error:", error);
      console.error("Detail Kesalahan:", error.response || error.message || error);
    } finally {
      setFilterLoading(false); // Set loading to false after filter operation completes
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <NavigationBars />
          <Container className="content-course">
            <Row>
              <Col>
                <div className="d-flex justify-content-end">
                  <div className="search d-flex p-3">
                    <input placeholder="search..." type="text" value={searchInput} onChange={handleSearchInputChange} onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
                    <div className="iconsearh m-1 text-danger" onClick={handleSearch}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </div>

                <Row className="mt-1">
                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-primary" onClick={() => reloadData()}>
                      All
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-primary" onClick={() => applyFilter("filterBackendAfterOrder")}>
                      Backend
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-primary" onClick={() => applyFilter("filterFrontendAfterOrder")}>
                      Frontend
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-primary" onClick={() => applyFilter("filterFullstackAfterOrder")}>
                      Fullstack
                    </div>
                  </Col>
                </Row>
                {filterLoading ? (
                  <div className="loader-container">
                    <span className="loader"></span>
                  </div>
                ) : (
                  <Row className="mt-4">
                    {myclass.data && myclass.data.length > 0 ? (
                      myclass.data.map((index) => (
                        <Col key={index.code} md={4} className="d-flex justify-content-center mt-3">
                          <Card className="kotakcourse" onClick={() => handleCardClick(index.title)}>
                            <Card.Img variant="top" src={imgcourse} />
                            <Card.Body>
                              <div className="d-flex justify-content-between">
                                <div className="title ">{index.title}</div>
                                <div className="rating d-flex ">
                                  <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                                  <p>4.5</p>
                                </div>
                              </div>

                              <Card.Text>
                                <div className="desc mt-1 fw-bold">{index.about}</div>
                                <div>{index.teacher}</div>
                              </Card.Text>
                              <div className="d-flex infocourse">
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faStar} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1 ">{index.level}</p>
                                </div>
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faBook} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1">{index.module}</p>
                                </div>
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faClock} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1">{index.duration}</p>
                                </div>
                              </div>

                              <div className="d-flex">
                                <FontAwesomeIcon icon={faClock} className="img text-success me-2" /> <ProgressBar animated now={45} variant="danger" className="w-50" />
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                    ) : (
                      <Col md={12} className="text-center mt-3 text-danger">
                        <p>No results found</p>
                      </Col>
                    )}
                  </Row>
                )}
                {/* Card */}
              </Col>
            </Row>
          </Container>
          <Footerr />
        </>
      )}
    </>
  );
}

export default CourseRun;
