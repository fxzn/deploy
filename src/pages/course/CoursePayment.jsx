// In your CoursePayment.js file
import { Card, Container } from "react-bootstrap";
import { faClock, faBook, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationBars from "../../components/navigation/NavigationBars";
import imgcourse from "../../assets/image.png";
import "./courses.css"; // Link or import your CSS file
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CoursePayment() {
  const [courseData, setCourseData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const navigate = useNavigate();
  const { title } = useParams();
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const getCourseByTitle = async () => {
      try {
        const token = localStorage.getItem("token");
        if (title) {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/order/getOrder?title=${title}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCourseData(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCourseByTitle();
  }, []);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/order/createOrder`,
        {
          paymentMethod,
          courseTitle,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        if (response.data.message === "Create order successfully!") {
          toast.success("Order placed successfully!");
          navigate("/paymentsuccess", { replace: true });
        } else if (response.data.message === "User already ordered this course!") {
          toast.error("User already ordered this course!");
          navigate("/courserun", { replace: true });
        } else {
          toast.error("Unknown success message from the server");
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Server error");
        }
        return;
      }
      setLoading(false);
      toast.error(error.message);
    }
  };
  
  
  


  return (
    <>
      <NavigationBars />
      <Container>
        <Link to={`/detailcourse/${title}`} className="d-flex text-center mt-3">
          <FontAwesomeIcon icon={faArrowLeft} className="me-3 mt-1 fw-bold" />
          <div className="fw-bold">Kembali</div>
        </Link>

        <div className="w-75 header-payment mt-2">
          <p className="text-white fw-bold mt-1">Copy Selesaikan Pembayaran sampai 10 Maret 2023 12:00</p>
        </div>
        <hr />

        <div>
          <div className="container">
            <div className="row">
              <div className="col col-md-7">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item mb-3">
                    <h2 className="h5 px-4 py-3 accordion-header d-flex justify-content-between align-items-center">
                      <div className="form-check w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseCC" aria-expanded="false">
                        <input className="form-check-input" type="radio" name="payment" id="payment1" />
                        <label className="form-check-label pt-1" htmlFor="payment1">
                          Payment
                        </label>
                      </div>
                      <span>
                        <svg width="34" height="25" xmlns="http://www.w3.org/2000/svg">
                          <g fill="#333840">
                            <path d="M29.418 2.083c1.16 0 2.101.933 2.101 2.084v16.666c0 1.15-.94 2.084-2.1 2.084H4.202A2.092 2.092 0 0 1 2.1 20.833V4.167c0-1.15.941-2.084 2.102-2.084h25.215ZM4.203 0C1.882 0 0 1.865 0 4.167v16.666C0 23.135 1.882 25 4.203 25h25.215c2.321 0 4.203-1.865 4.203-4.167V4.167C33.62 1.865 31.739 0 29.418 0H4.203Z"></path>
                            <path d="M4.203 7.292c0-.576.47-1.042 1.05-1.042h4.203c.58 0 1.05.466 1.05 1.042v2.083c0 .575-.47 1.042-1.05 1.042H5.253c-.58 0-1.05-.467-1.05-1.042V7.292Zm0 6.25c0-.576.47-1.042 1.05-1.042H15.76c.58 0 1.05.466 1.05 1.042 0 .575-.47 1.041-1.05 1.041H5.253c-.58 0-1.05-.466-1.05-1.041Zm0 4.166c0-.575.47-1.041 1.05-1.041h2.102c.58 0 1.05.466 1.05 1.041 0 .576-.47 1.042-1.05 1.042H5.253c-.58 0-1.05-.466-1.05-1.042Zm6.303 0c0-.575.47-1.041 1.051-1.041h2.101c.58 0 1.051.466 1.051 1.041 0 .576-.47 1.042-1.05 1.042h-2.102c-.58 0-1.05-.466-1.05-1.042Zm6.304 0c0-.575.47-1.041 1.051-1.041h2.101c.58 0 1.05.466 1.05 1.041 0 .576-.47 1.042-1.05 1.042h-2.101c-.58 0-1.05-.466-1.05-1.042Zm6.304 0c0-.575.47-1.041 1.05-1.041h2.102c.58 0 1.05.466 1.05 1.041 0 .576-.47 1.042-1.05 1.042h-2.101c-.58 0-1.05-.466-1.05-1.042Z"></path>
                          </g>
                        </svg>
                      </span>
                    </h2>
                    <div id="collapseCC" className="accordion-collapse collapse show" data-bs-parent="#accordionPayment">
                      <div className="accordion-body">
                        <div className="mb-3">
                          <label className="form-label">Payment Method</label>
                          <input type="text" className="form-control" placeholder="choose you method" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Course Title</label>
                              <input type="text" className="form-control" placeholder="course title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-md-5">
                <div className="card position-sticky top-0">
                  {courseData && (
                    <div className="p-3 bg-light bg-opacity-10">
                      <Card className="modalkotakcourse">
                        <Card.Img className="img-card" variant="top" src={imgcourse} />
                        <Card.Body>
                          <div className="d-flex justify-content-between">
                            <div className="title ">{courseData.title}</div>
                            <div className="rating d-flex ">
                              <FontAwesomeIcon icon={faStar} className="img text-warning me-1" />
                              <p>4.5</p>
                            </div>
                          </div>

                          <Card.Text>
                            <div className="desc mt-1 fw-bold"> </div>
                            <div>{courseData.teacher}</div>
                          </Card.Text>
                          <div className="d-flex infocourse">
                            <div className="level me-4 d-flex">
                              <div>
                                <FontAwesomeIcon icon={faStar} className="img" />
                              </div>
                              <p className="ms-1 mt-1"> Intermediate Level</p>
                            </div>
                            <div className="level me-4 d-flex">
                              <div>
                                <FontAwesomeIcon icon={faBook} className="img" />
                              </div>
                              <p className="ms-1 mt-1">10 modul</p>
                            </div>
                            <div className="level me-4 d-flex">
                              <div>
                                <FontAwesomeIcon icon={faClock} className="img" />
                              </div>
                              <p className="ms-1 mt-1">120 menit</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                      <h6 className="card-title mb-3 mt-4">Order Summary</h6>
                      <div className="d-flex justify-content-between mb-1 small">
                        <span>Price</span> <span>Rp. {courseData.price}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1 small">
                        <span>PPN</span> <span>Rp. {courseData.ppn}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1 small">
                        <span>Total</span> <span className="text-danger">Rp. {courseData.totalPrice}</span>
                      </div>
                      <hr />
                    </div>
                  )}
                  <button className="btn btn-primary w-100 mt-2" onClick={handleOrder} disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CoursePayment;
