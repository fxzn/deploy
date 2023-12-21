import Footerr from "../../components/footer/Footerr";
import NavigationBars from '../../components/navigation/NavigationBars';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faBook,
  faStar,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import imgcourse from '../../assets/image.png';
import './History.css';
import Bars from './Bar';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <>
     <div className="nav1">
        <NavigationBars />
      </div>
      <section>
        <div className="tainer-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>
            <div className="bar">
              <Bars />
              </div>
            <div className="profileFormm">

              {/* card */}

              <Row className="kard">
              <span className="arrow1">
                <Link to="/Bar">
                  <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '24px', color: '#151515' }}/>
                </Link>
              </span>
                <h2>Riwayat Pembayaran</h2>
                <Col md={12} className="d-flex justify-content-center mt-3">
                  <Card
                    className="cardkursus"
                    style={{ width: '400px', height: '185px' }}
                  >
                    <Card.Img
                      variant="top"
                      src={imgcourse}
                      style={{ height: '80px' }}
                    />
                    <Card.Body>
                      <div className="title mt-0" id="text1">
                        UI/UX Design
                      </div>
                      <Card.Text className="desc mt-0" id="text2">
                        Belajar Web Designer dengan Figma by Angela Doe
                      </Card.Text>
                      
                      <div
                        className="d-flex infocourse1"
                        style={{ margin: '-8px 0' }}
                      >
                        <div className="level me-4 d-flex">
                          <div className="ket">
                            <FontAwesomeIcon icon={faStar} className="img" />
                          </div>
                          <p className="ms-1 mt-0"> Intermediate Level</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faBook} className="img" />
                          </div>
                          <p className="ms-1 mt-0">10 modul</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faClock} className="img" />
                          </div>
                          <p className="ms-1 mt-0">120 menit</p>
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        style={{ height: '18px', fontSize: '10px' }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Premium
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={12} className="d-flex justify-content-center mt-3">
                  <Card
                    className="cardkursus"
                    style={{ width: '400px', height: '185px' }}
                  >
                    <Card.Img
                      variant="top"
                      src={imgcourse}
                      style={{ height: '80px' }}
                    />
                    <Card.Body>
                      <div className="title mt-0" id="text1">
                        UI/UX Design
                      </div>

                      <Card.Text className="desc mt-0" id="text2">
                        Belajar Web Designer dengan Figma by Angela Doe
                      </Card.Text>
                      <div
                        className="d-flex infocourse1"
                        style={{ margin: '-8px 0' }}
                      >
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faStar} className="img" />
                          </div>
                          <p className="ms-1 mt-0"> Intermediate Level</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faBook} className="img" />
                          </div>
                          <p className="ms-1 mt-0">10 modul</p>
                        </div>
                        <div className="level me-4 d-flex">
                          <div>
                            <FontAwesomeIcon icon={faClock} className="img" />
                          </div>
                          <p className="ms-1 mt-0">120 menit</p>
                        </div>
                      </div>

                      <Button
                        variant="danger"
                        style={{ height: '18px', fontSize: '10px' }}
                        className="d-flex align-items-center justify-content-center"
                      >
                        Premium
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>

      <div className="foot1">
      <Footerr/>
      </div>
    </>
  );
};

export default UserProfile;
