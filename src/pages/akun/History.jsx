import Footerr from '../../components/footer/Footerr';
import NavigationBars from '../../components/navigation/NavigationBars';
import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faBook,
  faStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import imgcourse from '../../assets/image.png';
import './History.css';
import Bars from './Bar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GridLoader } from 'react-spinners';

const CourseCard = ({ order }) => {
  const { title, about, teacher, level, duration, module, price, isPremium } = order;

  return (
    <Col md={12} className="d-flex justify-content-center mt-3">
      <Card className="cardkursus" style={{ width: '400px', height: '185px' }}>
        <Card.Img variant="top" src={imgcourse} style={{ height: '80px' }} />
        <Card.Body>
          <div className="title mt-0" id="text1">
            {title}
          </div>
          <Card.Text className="desc mt-0" id="text2">
            {about}
          </Card.Text>
          <div className="d-flex infocourse1" style={{ margin: '-8px 0' }}>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faStar} className="img" />
              </div>
              <p className="ms-1 mt-0">{level}</p>
            </div>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faBook} className="img" />
              </div>
              <p className="ms-1 mt-0">{module} modul</p>
            </div>
            <div className="level me-4 d-flex">
              <div>
                <FontAwesomeIcon icon={faClock} className="img" />
              </div>
              <p className="ms-1 mt-0">{duration}</p>
            </div>
          </div>
          <Button
            variant="danger"
            style={{ height: '18px', fontSize: '10px' }}
            className="d-flex align-items-center justify-content-center"
          >
            {isPremium ? 'Premium Course' : 'Free Course'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const UserProfile = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token tidak ditemukan.');
          return;
        }

        const response = await axios.get(
          'https://easy-class-407401.et.r.appspot.com/api/user/get',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const userId = response.data.data;

        const orderResponse = await axios.get(
          `http://easy-class-407401.et.r.appspot.com/api/course/getCourseOrder?userId=${userId}`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrderHistory(orderResponse.data.data);
      } catch (error) {
        console.error('Error fetching data:', error.response);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Panggil fungsi fetchData
  }, []);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

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
              <Row className="kard">
                <span className="arrow1">
                  <Link to="/Bar">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ fontSize: '24px', color: '#151515' }}
                    />
                  </Link>
                </span>

                {orderHistory.slice(0, 2).map((order, index) => (
                  <CourseCard key={index} order={order} />
                ))}

                {showAllCards &&
                  orderHistory.slice(2).map((order, index) => (
                    <CourseCard key={index} order={order} />
                  ))}

                {orderHistory.length > 2 && (
                  <div className="text-center mt-3">
                    <Button variant="primary" onClick={toggleShowAllCards}>
                      {showAllCards ? 'Show Less' : 'Show All'}
                    </Button>
                  </div>
                )}

                {isLoading && (
                  <div className="spinner-container">
                    <GridLoader color={'#fa4c4c'} loading={isLoading} />
                  </div>
                )}
              </Row>
            </div>
          </div>
        </div>
      </section>

      <div className="foot1">
        <Footerr />
      </div>
    </>
  );
};

export default UserProfile;
