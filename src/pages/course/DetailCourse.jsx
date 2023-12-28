import { Link, useNavigate, useParams } from "react-router-dom";
import "./Detailcourse.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClock, faLock, faShield, faStar, faPlayCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationBars from "../../components/navigation/NavigationBars";
import Footerr from "../../components/footer/Footerr";
import { useEffect, useState } from "react";
import { GetCourseDetail } from "../../../service/Course.service";


function DetailCourse() {
  const [showModal, setShowModal] = useState(false);
  const [courseDetail, setCourseDetail] = useState([]);
  const [subjectResponse, setsubjectresponse] = useState([]);
  const [linkVidio, setLinkVidio] = useState("https://www.youtube.com/embed/R4eWTI-07QY?si=lJXsrRVwUOkorJWl");
  const [description, setdescription] = useState("Hallo calon programmer selamat datang di easyclass");
  const [titleAktive, settitleAktive] = useState(null);
  const [loadingVidio, setLoadingvidio] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetCourseDetail(title);
        setLoading(false);
        setCourseDetail(response.data.addCourseResponse);
        setsubjectresponse(response.data.subjectResponse);
      } catch (error) {
        console.error("Error saat mengambil detail kursus:", error);
      }
    };

    fetchData();
  }, [title]);

  const clickTitle = (link, description, index) => {
    setLoadingvidio(true);
    setTimeout(() => {
      setLinkVidio(link);
      setdescription(description);
      settitleAktive(index);
      setLoadingvidio(false);
    }, 1500);
  };

  const handlBuyClick = () => {
    console.log("Tombol Premium diklik");
    navigate(`/course/payment/${title}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleJoinTelegram = () => {};

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <NavigationBars />
          <div className="container detail-course">
            <div className="row">
              <div className="col-md-8 left-content">
                <div className="top-navigation">
                  <Link to="/course" className="d-flex align-items-start ">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p className="kelas-lain">Kelas Lainnya</p>
                  </Link>
                </div>
                <div className="course-details">
                  <div className="d-flex justify-content-between align-items-center mb-">

                    <h2 className="text-judul">{courseDetail.title}</h2>

                  

                    <span className="d-flex ">
                      <FontAwesomeIcon icon={faStar} className="icon-rating" />
                      <p className="rating">4.7</p>
                    </span>
                  </div>
                  <h4 className="text-about mb-1">{courseDetail.about}</h4>
                  <p className="fasilator-name">By {courseDetail.teacher}</p>
                  <div className="d-flex flex-wrap align-items-center mb-3 info-course">
                    <div className="d-flex mb-2">

                      <FontAwesomeIcon icon={faShield} className="icon-triangle" />
                      <p className="text-course-info">{courseDetail.level}</p>
                    </div>
                    <span className="d-flex mb-2">
                      <FontAwesomeIcon icon={faBook} className="icon-triangle"/>
                      <p className="text-course-info">{courseDetail.module} Module</p>
                    </span>

                    <span className="d-flex mb-2">
                      <FontAwesomeIcon icon={faClock} className="icon-triangle" />

                      <p className="text-course-info">{courseDetail.duration}</p>
                    </span>
                  </div>
                  <div>
                    {courseDetail.isPremium ? (
                      <button className="btn btn-telegram" onClick={handlBuyClick}>
                        Premium
                      </button>
                    ) : (
                      <button className="btn btn-telegram" onClick={handleJoinTelegram}>
                        Join Telegram
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <div className="video-content mb-3">
                    {loadingVidio ? (
                      <div className="loader-vidio-content">
                        <span className="loader-vidio"></span>
                      </div>
                    ) : (
                      <iframe className="vidio" src={linkVidio} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    )}
                  </div>
                </div>

                <div className="tentang-kelas">
                  <h1 className="font-weight-bold mb-3 mt-7">Tentang Kelas</h1>
                  <p>{description}</p>
                </div>
                <div className="mb-5">
                  <h1 className="font-weight-bold mb-3">Kelas Ini Ditujukan Untuk</h1>
                  <ol className="list-decimal">
                    <li>Anda yang ingin memahami poin penting design system</li>
                    <li>Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                    <li>Anda yang ingin latihan membangun design system</li>
                    <li>Anda yang ingin latihan membangun design system</li>
                  </ol>
                </div>
              </div>
              <div className="col-md-4 ">
                <Card className="mb-2 card-video">
                  <Card.Body className="jutify-content-center ">
                    <div className="d-flex align-items-center gap-2=">
                      <div className="d-flex justify-content-between w-50 align-items-center">
                        <h1 className="header-content">Materi Belajar</h1>
                      </div>
                    </div>

                    <div>
                      <ol>
                        {subjectResponse.map((subject, index) => (
                          <li key={index} className="my-2 d-flex justify-content-between align-items-center pointer">
                            <p onClick={() => {subject.isPremium ? handlBuyClick() : clickTitle(subject.link, subject.description, index)}} className={`d-flex gap-3 align-items-center ${titleAktive === index ? "text-success fw-bold" : null}`}>
                              <span onClick={() => clickTitle(subject.link)} className="p-1 align-items-center justify-content-center">
                                {index + 1}
                              </span>
                              {subject.title}
                            </p>
                            {courseDetail.isPremium ? <FontAwesomeIcon icon={faLock} className="icon-lock" /> : <FontAwesomeIcon icon={faPlayCircle} className="icon-play text-dark w-10 h-full" />}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          {/* <ModalBeliCourse title={courseDetail.title} duration={courseDetail.duration} module={courseDetail.module} level={courseDetail.level} showModal={showModal} handleCloseModal={handleCloseModal} /> */}
          <Footerr />
        </>
      )}
    </>
  );
}

export default DetailCourse;
