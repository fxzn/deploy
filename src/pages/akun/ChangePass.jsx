import React, { useState, useEffect } from 'react';
import './ChangePass.css';
import Bars from './Bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavigationBars from '../../components/navigation/NavigationBars';
import Footerr from "../../components/footer/Footerr";

const UserProfile = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token tidak ditemukan.');
          return;
        }

        const response = await axios.get(
          'https://easy-class-407401.et.r.appspot.com/api/user/get',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Respon Server:', response);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it runs once when component mounts

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token tidak ditemukan.');
        return;
      }

      const response = await axios.patch(
        'https://easy-class-407401.et.r.appspot.com/api/user/changePassword',
        {
          currentPassword,
          newPassword,
          confirmationPassword,
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      // Handle the response, for example, show a success message
      console.log('Password changed successfully', response.data);
    } catch (error) {
      // Handle errors, for example, show an error message
      console.error('Error changing password', error);
    }
  };

  return (
    <>
      <div className="nav1">
        <NavigationBars />
      </div>
      <section>
        <div className="coniner-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>
            <div className="bar">
              <Bars />
            </div>
            <div className="profileFormm">
              <div className="contactForm">
                <span className="arrow1">
                  <Link to="/Bar">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ fontSize: '24px', color: '#151515' }}
                    />
                  </Link>
                </span>
                <div className="formBox">
                  <h2>Ubah Password</h2>
                  <form onSubmit={handleChangePassword}>
                    <div className="inputBox w100">
                      <input
                        type="password"
                        id="oldPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="oldPassword">Masukkan Password Lama</label>
                    </div>
                    <div className="inputBox w100">
                      <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="newPassword">Masukkan Password Baru</label>
                    </div>
                    <div className="inputBox w100">
                      <input
                        type="password"
                        id="confirmPassword"
                        value={confirmationPassword}
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="confirmPassword">
                        Ulangi Password Baru
                      </label>
                    </div>

                    <div className="inputBox w100" style={{ marginTop: '120px' }}>
                      <input type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="foot1">
        <Footerr/>
      </div>
    </>
  );
};

export default UserProfile;
