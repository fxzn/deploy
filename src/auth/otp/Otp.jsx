import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Otp.css';
// import imgcourse from '../../assets/image.png';
// import { Card } from 'react-bootstrap';

const OTPPage = () => {
  const [otp, setOTP] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [otpValid, setOTPValid] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [timerExpired, setTimerExpired] = useState(false);
  const navigate = useNavigate();

  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef(null));

  useEffect(() => {
    const userEmailFromServer = '';
    setUserEmail(userEmailFromServer);
  }, []);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;

    if ((e.code === 'Backspace' || e.key === 'Backspace') && index > 0) {
      const newOTP = [...otp];
      newOTP[index] = '';
      setOTP(newOTP);

      inputRefs[index - 1].current.focus();
      return;
    }

    if (/^[0-9]$/.test(value) || value === '') {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      setError('');
      setOTPValid(false);

      if (value !== '' && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      setError('Harap masukkan angka.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.some((digit) => digit === '')) {
      setError('Harap masukkan semua digit OTP.');
      setOTPValid(false);
      return;
    }

    try {
      const response = await axios.post(
        'https://easy-class-407401.et.r.appspot.com/api/auth/otp',
        {
          otp: otp.join(''),
        }
      );

      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      } else if (response.data && response.data.success) {
        setOTPValid(true);

        setTimeout(() => {
          toast.success('OTP berhasil diverifikasi');
          navigate('/auth/success', { replace: true });
        }, 2000);
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      setError('Terjadi kesalahan saat memverifikasi OTP.');
      setOTPValid(false);
      toast.error('Terjadi kesalahan saat memverifikasi OTP.');
    }
  };

  const handleResend = async () => {
    try {
      if (!userEmail) {
        return;
      }
  
      await axios.post(
        'http://easy-class-407401.et.r.appspot.com/api/auth/refreshOTP',
        { userEmail }
      );

      setResendTimer(300);
      setTimerExpired(false);
      toast.info('OTP berhasil dikirim ulang.');
    } catch (error) {
      console.error('Error during OTP resend:', error);
      toast.error('Terjadi kesalahan saat mengirim ulang OTP.');
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setResendTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          setTimerExpired(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const isTimerRunning = resendTimer > 0;
    if (!isTimerRunning) {
    }
  }, [resendTimer]);

  return (
    <div className="otp-container height-100 d-flex justify-content-center align-items-center">
      <div className="otp-wrapper position-relative">
        <div className="otp-card card p-4 text-center animated bounceIn">
          <h6 className="mb-4 mt-4">Masukkan Kode OTP</h6>
          <div className="otp-info">
            <span>Kode telah dikirimkan ke</span>
            <small className="text-muted">{userEmail}</small>
          </div>
          <div
            id="otp"
            className="otp-inputs d-flex flex-row justify-content-center mt-4"
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                className="m-2 text-center form-control rounded"
                type="text"
                value={digit}
                onChange={(e) => handleOTPChange(e, index)}
                maxLength="1"
                ref={inputRefs[index]}
                onKeyDown={(e) => handleOTPChange(e, index)}
              />
            ))}
          </div>
          <div className="mt-3 text-danger">{error}</div>
          <div className="mt-4 mb-4">
            <button
              className="btn btn-danger px-4 validate"
              type="submit"
              onClick={handleSubmit}
            >
              Simpan
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className={`btn resend-btn mt-5 animated fadeIn`}
            disabled={!timerExpired && resendTimer > 0}
            onClick={handleResend}
          >
            {!timerExpired && resendTimer > 0 && `(${resendTimer}s)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
