import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Otp.css";

const OTPPage = () => {
  const [otp, setOTP] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [otpValid, setOTPValid] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleOTPChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value) || value === "") {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      setError("");
      setOTPValid(false);

      if (value !== "" && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      setError("Harap masukkan angka.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any digit in the OTP is empty
    if (otp.some((digit) => digit === "")) {
      setError("Harap masukkan semua digit OTP.");
      setOTPValid(false);
      return;
    }

    try {
      const response = await axios.post("https://easy-class-407401.et.r.appspot.com/api/auth/otp", {
        otp: otp.join(""),
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        navigate("/");
      } else if (response.data && response.data.success) {
        setOTPValid(true);

        setTimeout(() => {
          toast.success("OTP berhasil diverifikasi");

          // Navigate to another page (replace the path with your desired route)
          navigate("/auth/success", { replace: true });
        }, 2000);
        toast.success("OTP berhasil diverifikasi");
        setOTPValid(true);
        // setError('Maaf, kode OTP salah!');
        // setOTPValid(false);
        // toast.error('Gagal verifikasi OTP');
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setError("Terjadi kesalahan saat memverifikasi OTP.");
      setOTPValid(false);
      toast.error("Terjadi kesalahan saat memverifikasi OTP.");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="otp">
      <div className="otp-container">
        <span className="arrow">
          <Link to="/auth/register">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </span>
        <h4>Masukkan OTP</h4>
        <p id="p1">Ketik 6 digit kode yang dikirimkan ke {userEmail}</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input className="input" key={index} type="text" value={digit} onChange={(e) => handleOTPChange(e, index)} maxLength="1" ref={inputRefs[index]} />
            ))}
          </div>
          <p>Kirim Ulang OTP dalam {resendTimer} detik</p>
          <div className="submit-button-container">
            <button className="tombol" type="submit">
              Simpan
            </button>
            <div className="atention">
              {otpValid && <p className="success-message">Verifikasi berhasil</p>}
              {error && !otpValid && <p className="error-message">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
