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
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/searchingCourseByTitle`, {
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
                    <input type="text" value={searchInput} onChange={handleSearchInputChange} onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
                    <div className="iconsearh m-1 text-danger" onClick={handleSearch}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </div>

                <Row className="mt-1">
                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-danger">All</div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-danger">Backend</div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-danger">Frontend</div>
                  </Col>

                  <Col md={3}>
                    <div className="w-100 mt-3 btn btn-danger">Fullstack</div>
                  </Col>
                </Row>

                {/* Card */}
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
                    <Col md={12} className="text-center mt-3">
                      <p>No results found</p>
                    </Col>
                  )}
                </Row>
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
