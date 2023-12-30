
import{ useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { faSearch, faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import NavigationBars from "../../components/navigation/NavigationBars";
import Footerr from "../../components/footer/Footerr";
import { useNavigate } from "react-router-dom";
import { GetCourse } from "../../../service/Course.service";
import LoginModal from "./LoginModal";
import axios from "axios";

function Course() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedFilterLevel, setSelectedFilterLevel] = useState(null);
  const [selectedFilterPrimium, setSelectedFilterPremium] = useState(null);
  const [loadingFilter, setLoadingFilter] = useState({
    general: false,
    level: false,
    premium: false,
  });
  const [activeFilters, setActiveFilters] = useState({
    general: null,
    level: null,
    premium: null,
  });

  useEffect(() => {
    GetCourse((data) => {
      setCourse(data);
      setLoading(false);
    });
  }, []);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const userIsLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const handleCardClick = (coursetitle) => {
    if (userIsLoggedIn()) {
      navigate(`/detailcourse/${coursetitle}`);
    } else {
      handleShowLoginModal();
    }
  };

  const performSearch = async (searchTerm) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/searchingCourseByTitle`, {
        params: {
          title: searchTerm,
        },
      });
      setCourse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    performSearch(searchInput);
  };

  const handleSearchInputChange = async (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

  
    if (inputValue !== "") {
      performSearch(inputValue);
    } else {
    
      GetCourse((data) => {
        setCourse(data);
      });
    }
  };

  

  const handleFilter = async (filterType) => {
    try {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, general: true }));
      const newFilter = selectedFilter === filterType ? null : filterType;
      let response;
      if (!newFilter) {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
      } else {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/${newFilter}`);
      }
      setSelectedFilter(newFilter);
      setCourse(response.data);
      setActiveFilters((prevFilters) => ({ ...prevFilters, general: newFilter }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, general: false }));
    }
  };

  const handlefilterlevel = async (filterTypeLevel) => {
    try {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, level: true }));
      const newFilterLevel = selectedFilterLevel === filterTypeLevel ? null : filterTypeLevel;
      let response;
      if (!newFilterLevel) {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
      } else {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/${newFilterLevel}`);
      }
      setSelectedFilterLevel(newFilterLevel);
      setCourse(response.data);
      setActiveFilters((prevFilters) => ({ ...prevFilters, level: newFilterLevel }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, level: false }));
    }
  };

  const handlefilterpremium = async (filterTypepremium) => {
    try {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, premium: true }));
      let newFilterPremium;

      // Check if "All" button is clicked
      if (filterTypepremium === "filterAll") {
        newFilterPremium = null;
      } else {
        newFilterPremium = selectedFilterPrimium === filterTypepremium ? null : filterTypepremium;
      }

      let response;

      if (!newFilterPremium) {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
      } else {
        response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/${newFilterPremium}`);
      }

      setSelectedFilterPremium(newFilterPremium);
      setCourse(response.data);
      setActiveFilters((prevFilters) => ({ ...prevFilters, premium: newFilterPremium }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFilter((prevLoading) => ({ ...prevLoading, premium: false }));
    }
  };

  const handleClearFilters = async () => {
    try {
      setLoadingFilter({ general: true, level: true, premium: true });
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
      setCourse(response.data);
      setActiveFilters({ general: null, level: null, premium: null });
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingFilter({ general: false, level: false, premium: false });
    }
  };

  return (
    <>
      {loading ? (
        <div className=".loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <NavigationBars />
          <Container className="content-course">
            <Row>
              <Col md={3}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item className="accordion-item">
                    <Accordion.Header className="accordion-header text-white fw-bold">Topik Kelas</Accordion.Header>
                    <Accordion.Body className="jutify-content-center">
                      <div className="mt-4">
                        <p className="fw-bold">Kategory</p>
                        <Form className="mt-2">
                          <Form.Check inline label="BackEnd" name="group1" id="checkbox1" className="mt-2" onChange={() => handleFilter("filterBackEnd")} checked={activeFilters.general === "filterBackEnd"} />
                          <Form.Check inline label="FullStack" name="group1" id="checkbox1" className="mt-2" onChange={() => handleFilter("filterFullStack")} checked={activeFilters.general === "filterFullStack"} />
                          <Form.Check inline label="FrontEnd" name="group1" id="checkbox1" className="mt-2" onChange={() => handleFilter("filterFrontEnd")} checked={activeFilters.general === "filterFrontEnd"} />
                        </Form>
                      </div>
                      <div className="mt-4">
                        <p className="fw-bold">Level Kesulitan</p>
                        <Form className="mt-1">
                          <Form.Check inline label="Beaginner Level" name="group1" id="checkbox1" className="mt-2" onChange={() => handlefilterlevel("filterBeginner")} checked={activeFilters.level === "filterBeginner"} />
                          <Form.Check inline label="Intermediate Level" name="group1" id="checkbox1" className="mt-2" onChange={() => handlefilterlevel("filterIntermediate")} checked={activeFilters.level === "filterIntermediate"} />
                          <Form.Check inline label="Advanced Level" name="group1" id="checkbox1" className="mt-2" onChange={() => handlefilterlevel("filterAdvanced")} checked={activeFilters.level === "filterAdvanced"} />
                        </Form>
                      </div>
                      <Button variant="white" className="text-danger mt-5 w-100" onClick={handleClearFilters}>
                        Hapus Filter
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={9}>
                <div className="d-flex justify-content-end">
                  <div className="search d-flex p-3">
                    <input type="text" value={searchInput} onChange={handleSearchInputChange} placeholder="search..."/>
                    <div className="iconsearh m-1 text-danger" onClick={handleSearch}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </div>
                <Row className="mt-1">
                  <Col md={4}>
                    <Button
                      variant="danger"
                      className="w-100 mt-3"
                      onClick={() => handlefilterpremium("filterAll")}
                      checked={selectedFilterPrimium === null} // Check if "All" is selected
                    >
                      All
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button variant="danger" className="w-100 mt-3" onClick={() => handlefilterpremium("filterCoursePremium")} checked={selectedFilterPrimium === "filterCoursePremium"}>
                      Kelas premium
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button variant="danger" className="w-100 mt-3" onClick={() => handlefilterpremium("filterCourseFree")} checked={selectedFilterPrimium === "filterCourseFree"}>
                      Kelas gratis
                    </Button>
                  </Col>
                </Row>
                {/* Card */}
                {loadingFilter.general || loadingFilter.level || loadingFilter.premium ? (
                  <div className="loader-container  top-50 start-50 translate-middle">
                    <span className="loader"></span>
                  </div>
                ) : (
                  <Row className="mt-4">
                    {course.data && course.data.length > 0 ? (
                      course.data.map((courseData) => (
                        <Col key={courseData.code} md={6} className="d-flex justify-content-center mt-3">
                          <Card className="kotakcourse" onClick={() => handleCardClick(courseData.title)}>
                            <Card.Img className="img-card" variant="top" src={imgcourse} />
                            <Card.Body>
                              <div className="d-flex justify-content-between">
                                <div className="title">{courseData.title}</div>
                                <div className="rating d-flex">
                                  <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                                  <p className="rate-card">0</p>
                                </div>
                              </div>
                              <Card.Text>
                                <span className="desc mt-1 fw-bold">{courseData.about}</span>
                                <p> {courseData.teacher}</p>
                              </Card.Text>

                              <div className="d-flex infocourse">
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faStar} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1">{courseData.level}</p>
                                </div>
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faBook} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1">{courseData.module} modul</p>
                                </div>
                                <div className="level me-4 d-flex">
                                  <div>
                                    <FontAwesomeIcon icon={faClock} className="img" />
                                  </div>
                                  <p className="ms-1 mt-1">{courseData.duration} menit</p>
                                </div>
                              </div>
                              {courseData.isPremium ? <Button variant="danger">Rp.{courseData.price.toLocaleString("id-ID", { currency: "IDR" })}</Button> : <Button variant="danger">gratis</Button>}
                            </Card.Body>
                          </Card>
                        </Col>
                      ))
                    ) : (
                      <Col md={12} className="text-center mt-3">
                        <p>No results found</p>
                      </Col>
                    )}
                  </Row>
                )}
                ;
              </Col>
            </Row>
          </Container>
          <Footerr />
          <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} navigate={navigate} />
        </>
      )}
    </>
  );
}

export default Course;
