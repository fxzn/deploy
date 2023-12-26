import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostUsername.css";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

function ResetPaswd() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setNewConfirmPassword] = useState("");

  const handleSubmitUsername = async (e) => {
    e.preventDefault();

    try {
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/resetPassword`,
        {
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      const resetLink = `https://easyclass-course.vercel.app/auth/resetPassword?token=${response.data.token}`;
      window.location.href = resetLink;
    } catch (error) {
      console.error("Error:", error);

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred");
        return;
      }

      toast.error("An error occurred");
    }
  };

  return (
    <>
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-username">
              <form autoComplete="off" className="form">
                <div className="icon-username">
                  <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div className="heading-username">
                  <h2>Trouble logging in ?</h2>
                  <p>Enter your new password, and we'll reset your account.</p>
                </div>
                <div className="actual-form">
                  <div className="input-username">
                    <input
                      type="password"
                      className="input-field"
                      autoComplete="off"
                      required
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-username">
                    <input
                      type="password"
                      className="input-field"
                      autoComplete="off"
                      required
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setNewConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="sign-btn" onClick={handleSubmitUsername}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPaswd;
