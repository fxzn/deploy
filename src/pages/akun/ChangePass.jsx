import { useState, useEffect } from 'react';
import './ChangePass.css';
import Bars from './Bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBars from '../../components/navigation/NavigationBars';
import Footerr from '../../components/footer/Footerr';

const UserProfile = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

  const togglePasswordVisibility = (passwordType) => {
    switch (passwordType) {
      case 'current':
        setShowCurrentPassword(!showCurrentPassword);
        break;
      case 'new':
        setShowNewPassword(!showNewPassword);
        break;
      case 'confirmation':
        setShowConfirmationPassword(!showConfirmationPassword);
        break;
      default:
        break;
    }
  };

  const notify = (message, type) => {
    toast(message, { type });
  };

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

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
            accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming the API returns a success message
      notify('Password changed successfully', 'success');
    } catch (error) {
      console.error('Error changing password', error);
      notify('Failed to change password', 'error');
    }
  };

  return (
    <>
      <NavigationBars />
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
                  <form onSubmit={handleChangePassword} style={{ maxWidth: '100%' }}>
                    <div className="inputBox w100">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        id="oldPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="oldPassword">Masukkan Password Lama</label>
                      <FontAwesomeIcon
                        className="icon-eye"
                        icon={showCurrentPassword ? faEyeSlash : faEye}
                        onClick={() => togglePasswordVisibility('current')}
                      />
                    </div>
                    <div className="inputBox w100">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="newPassword">Masukkan Password Baru</label>
                      <FontAwesomeIcon
                        className="icon-eye"
                        icon={showNewPassword ? faEyeSlash : faEye}
                        onClick={() => togglePasswordVisibility('new')}
                      />
                    </div>
                    <div className="inputBox w100">
                      <input
                        type={showConfirmationPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        value={confirmationPassword}
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                        required
                      />
                      <label htmlFor="confirmPassword">Ulangi Password Baru</label>
                      <FontAwesomeIcon
                        className="icon-eye"
                        icon={showConfirmationPassword ? faEyeSlash : faEye}
                        onClick={() => togglePasswordVisibility('confirmation')}
                      />
                    </div>
                    <div className="inputBox w100" style={{ marginTop: '90px' }}>
                      <input type="submit" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerr />
      <ToastContainer />
    </>
  );
};

export default UserProfile;
