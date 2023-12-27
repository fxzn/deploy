import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ForgotPassword.css";
import { faCircleUser, faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function ResetPaswd() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams(); 
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfrim] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        newPassword,
        confirmationPassword,
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/resetPassword?/${token}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Password changed successfully!");
        toast.success("Password changed successfully!");
        navigate("/auth/login", { replace: true });
      } else {
        console.error("Unexpected response status:", response.status);
        toast.error("Unexpected response status");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.response?.data.message || "Unknown error");
        toast.error(error.response?.data.message || "Unknown error");
      } else {
        console.error("General Error:", error.message || "Unknown error");
        toast.error(error.message || "Unknown error");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPasswordConfrim(!showPasswordConfirm);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });

      inp.addEventListener("blur", () => {
        if (inp.value !== "") return;
        inp.classList.remove("active");
      });
    });

    return () => {
      inputs.forEach((inp) => {
        inp.removeEventListener("focus", () => {});
        inp.removeEventListener("blur", () => {});
      });
    };
  }, []);

  return (
    <>
      <main>
        <div className="box-forgot">
          <div className="inner-forgot">
            <div className="forms-username">
              <Form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <div className="icon-username">
                  <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div className="heading-username">
                  <h2>Change password</h2>
                  <p>Enter your new password, and we'll reset your account.</p>
                </div>
                <div className="actual-form">
                  <div className="input-password">
                    <input type={showPassword ? "text" : "password"} className="input-field" autoComplete="off" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <label>New Password</label>
                    <FontAwesomeIcon className="icon-eyeslash" icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                  </div>
                  <div className="input-password">
                    <input type={showPasswordConfirm ? "text" : "password"} className="input-field" autoComplete="off" value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} />
                    <label>Confirm Password</label>
                    <FontAwesomeIcon className="icon-eyeslash" icon={showPasswordConfirm ? faEyeSlash : faEye} onClick={togglePasswordVisibilityConfirm} />
                  </div>
                  <button type="submit" className="sign-btn">
                    Update
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPaswd;
