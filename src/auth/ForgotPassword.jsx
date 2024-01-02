import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import "./ForgotPassword.css"; 

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitUsername = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/sendToken?username=${username}`,
        {
          username: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      toast.success("Link has been successfully sent to your email!");
    } catch (error) {
      console.error("Error:", error);

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred");
        return;
      }
      setLoading(false);
      toast.error("An error occurred");
    }
  };

  return (
    <main>
      <div className="box-forgot">
        <div className="inner-forgot">
          <div className="forms-username">
            <form autoComplete="off" className="form" onSubmit={handleSubmitUsername}>
              <div className="icon-username">
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <div className="heading-username">
                <h2>Trouble logging in?</h2>
                <p>Enter your username, and we'll send you a link to get back into your account.</p>
              </div>
              <div className="actual-form">
                <div className="input-username">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <button type="submit" className="sign-btn" disabled={loading}>
                  {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                  Submit
                </button>
                {/* <button type="submit" className="sign-btn">
                  Submit
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
