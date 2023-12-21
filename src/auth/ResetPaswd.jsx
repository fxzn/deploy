import { useEffect } from "react";
import "./style.css";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import { Link } from "react-router-dom";

function ResetPaswd() {
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
    <>
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <h4>easyclass</h4>
                </div>
                <div className="heading">
                  <h2>Reset Password</h2>
                </div>
                <div className="actual-form">
                  <div className="input-wrap">
                    <input type="text" minLength="4" className="input-field" autoComplete="off" required />
                    <label>Password</label>
                  </div>
                  <div className="input-wrap">
                    <input type="password" minLength="4" className="input-field" autoComplete="off" required />
                    <label>Password</label>
                  </div>
                  <Link to="/auth/login">
                    <button type="submit" className="sign-btn">
                      Submit
                    </button>
                  </Link>
                </div>
              </form>
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
    </>
  );
}

export default ResetPaswd;
