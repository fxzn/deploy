import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { faSearch, faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import imgcourse from "../../assets/image.png";
import NavigationBars from "../../components/navigation/NavigationBars";
import Footerr from "../../components/footer/Footerr";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCourse } from "../../../service/Course.service";

function Course() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetCourse((data) => {
      setCourse(data);
      setLoading(false);
    });
  }, []);

  const handleCardClick = (coursetitle) => {
    navigate(`/detailcourse/${coursetitle}`);
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
                      <div>
                        <p className="fw-bold">Filter</p>
                        <Form className="mt-2">
                          <Form.Check inline label="Paling Baru" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Paling Populer " name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Promo" name="group1" id="checkbox1" className="mt-2" />

                          {/* Add more Form.Check as needed */}
                        </Form>
                      </div>
                      <div className="mt-4">
                        <p className="fw-bold">Kategory</p>
                        <Form className="mt-2">
                          <Form.Check inline label="UI/UX Design" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Android Development" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Data Science" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Business Intelligence" name="group1" id="checkbox1" className="mt-2" />
                          {/* Add more Form.Check as needed */}
                        </Form>
                      </div>
                      <div className="mt-4">
                        dddddddddd
                        <p className="fw-bold">Level Kesulitan</p>
                        <Form className="mt-1">
                          <Form.Check inline label="Semua Level" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Beginner Level" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Intermediate Level" name="group1" id="checkbox1" className="mt-2" />
                          <Form.Check inline label="Advanced Level" name="group1" id="checkbox1" className="mt-2" />

                          {/* Add more Form.Check as needed */}
                        </Form>
                      </div>
                      <Button variant="white" className="text-danger mt-5 w-100">
                        Hapus Filter
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={9}>
                <div className="d-flex justify-content-end">
                  {" "}
                  {/* Tambahkan d-flex dan justify-content-end di sini */}
                  <div className="search d-flex p-3">
                    <input type="text" />
                    <div className="iconsearh m-1 text-danger">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </div>
                </div>

                <Row className="mt-1">
                  <Col md={4}>
                    <Button variant="danger" className="w-100 mt-3">
                      All
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button variant="danger" className="w-100 mt-3">
                      Kelas premium
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button variant="danger" className="w-100 mt-3">
                      Kelas gratis
                    </Button>
                  </Col>
                </Row>

                {/* Card */}
                <Row className="mt-4">
                  {course.data &&
                    course.data.length > 0 &&
                    course.data.map((courseData) => (
                      <Col key={courseData.code} md={6} className="d-flex justify-content-center mt-3">
                        <Card className="kotakcourse" onClick={() => handleCardClick(courseData.title)}>
                          <Card.Img className="img-card" variant="top" src={imgcourse} />
                          <Card.Body>
                            <div className="d-flex justify-content-between">
                              <div className="title">{courseData.title}</div>
                              <div className="rating d-flex">
                                <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                                <p>{courseData.rating}</p>
                              </div>
                            </div>
                            <Card.Text>
                              <div className="desc mt-1 fw-bold">{courseData.description}</div>
                              <div>by {courseData.teacher}</div>
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
                            <Button variant="danger">{courseData.isPremium ? "Premium" : "Gratis"}</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
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

export default Course;
