import { useEffect, useState } from "react";
import "./style.css";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Form } from "react-bootstrap";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldLogin, setFieldLogin] = useState("");
  const [loading, setLoading] = useState(false); // State untuk menandai loading
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set loading menjadi true saat proses login dimulai
      setLoading(true);

      let data = JSON.stringify({
        username,
        password,
      });

      let config = {
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL}/api/auth/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token, roles } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        if (roles && roles.includes("ROLE_ADMIN")) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }

        setUsername("");
        setPassword("");
        setFieldLogin("");
      } else {
        console.error("Token tidak diterima dari server");
        toast.error("Token tidak diterima dari server");
        setFieldLogin("Password atau Username salah");

        setUsername("");
        setPassword("");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response.data.message);
      } else {
        console.error("General Error:", error.message);
      }

      setFieldLogin("Password atau Username salah");
      setUsername("");
      setPassword("");
    } finally {
      // Set loading menjadi false setelah operasi login selesai
      setLoading(false);
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    const toggleBtns = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });

      inp.addEventListener("blur", () => {
        if (inp.value !== "") return;
        inp.classList.remove("active");
      });
    });

    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });

    function moveSlider() {
      let index = this.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });

    return () => {
      inputs.forEach((inp) => {
        inp.removeEventListener("focus", () => {});
        inp.removeEventListener("blur", () => {});
      });

      toggleBtns.forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });

      bullets.forEach((bullet) => {
        bullet.removeEventListener("click", moveSlider);
      });
    };
  }, []);

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <Form autoComplete="off" className="sign-in-form" onSubmit={onSubmit}>
              <div className="logo">
                <h4>easyclass</h4>
              </div>
              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <Link to="/auth/register" className="toggle">
                  Sign up
                </Link>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" minLength="4" className="input-field" autoComplete="off" required value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input type={showPassword ? "text" : "password"} className="input-field" autoComplete="off" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label>Password</label>
                  <FontAwesomeIcon className="icon-eye" icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                </div>
                {fieldLogin && <p className="text-danger text-center">{fieldLogin}</p>}
                <button type="submit" className="sign-btn" disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                  Sign In
                </button>
                <p className="text">
                  Forgotten your password or your login details?
                  <Link to="/auth/forgotpassword">Forgot password</Link>
                </p>
              </div>
            </Form>
          </div>
          <div className="carousel">
            <div className="images-wrapper">
              <img src={img1} className="image img-1 show" alt="" />
              <img src={img2} className="image img-2" alt="" />
              <img src={img3} className="image img-3" alt="" />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h4>Create your own courses</h4>
                  <h4>Customize as you like</h4>
                  <h4>Invite students to your class</h4>
                </div>
              </div>
              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
