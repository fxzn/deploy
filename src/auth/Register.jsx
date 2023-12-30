import { useEffect, useState } from "react";
import "./style.css";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userData = {
        username,
        email,
        password,
        phoneNumber: phonenumber, 
        country,
        city,
      };
  
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/signup`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Token successfully sent to your email!");
        navigate("/auth/otp", { replace: true });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
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

    // Cleanup event listeners when the component unmounts
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
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <Link to="/auth/login" className="toggle">
                  Sign in
                </Link>
              </div>
              <div className="actual-form">
              <div className="input-wrap">
                  <input type="text" className="input-field" autoComplete="off" required value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label>Username</label>
                </div>
                <div className="input-wrap">
                  <input type="email" className="input-field" autoComplete="off" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label>Email</label>
                </div>
                <div className="input-wrap">
                  <input type="number" className="input-field" autoComplete="off" required value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  <label>Phone Number</label>
                </div>
                <div className="input-wrap">
                  <input type="text" className="input-field" autoComplete="off" required value={city} onChange={(e) => setCity(e.target.value)} />
                  <label>City</label>
                </div>
                <div className="input-wrap">
                  <input type="text" className="input-field" autoComplete="off" required value={country} onChange={(e) => setCountry(e.target.value)} />
                  <label>Country</label>
                </div>
                <div className="input-wrap">
                  <input type={showPassword ? "text" : "password"} className="input-field" autoComplete="off" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label>Password</label>
                  <FontAwesomeIcon className="icon-eye" icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                </div>
                <button type="submit" className="sign-btn" onSubmit={onSubmit}>
                  Sign Up
                </button>
                <p className="text">
                  if you forget your password
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

export default Register;
