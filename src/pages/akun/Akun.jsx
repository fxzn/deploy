import NavigationBars from '../../components/navigation/NavigationBars';
import React, { useState, useEffect } from 'react';
import Bars from './Bar';
import './Akun.css';
import Footerr from '../../components/footer/Footerr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader, PuffLoader, SyncLoader } from 'react-spinners';
import { Toast } from 'react-bootstrap';

const Akun = () => {
  const [loading, setLoading] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [imageSize, setImageSize] = useState(50);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    country: '',
    city: '',
  });
  const [imageURL, setImageURL] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

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

        const user = response.data.data;

        if (user) {
          setUserData({
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            country: user.country,
            city: user.city,
          });

          if (user.linkPhoto) {
            setImageURL(user.linkPhoto);
          }
        } else {
          console.error('Pengguna tidak ditemukan berdasarkan token.');
        }
      } catch (error) {
        console.error('Error mengambil data pengguna:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log('Profile picture loaded:', reader.result);
        setProfilePicture(file);
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSizeChange = () => {
    const newSize = imageSize === 25 ? 50 : 25;
    console.log('Image size changed to:', newSize);
    setImageSize(newSize);
  };

  const handleChooseFileClick = () => {
    console.log('Choose file button clicked');
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!');

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token tidak ditemukan.');
        return;
      }

      if (profilePicture) {
        const formData = new FormData();
        formData.append('multipartFile', profilePicture);

        try {
          const response = await axios.post(
            'https://easy-class-407401.et.r.appspot.com/api/user/upload',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log('Profile Picture Upload Response:', response.data);
        } catch (error) {
          console.error('Error uploading profile picture:', error);
        }
      }

      const response = await axios.put(
        'https://easy-class-407401.et.r.appspot.com/api/user/update',
        {
          phoneNumber: userData.phoneNumber,
          country: userData.country,
          city: userData.city,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Update User Data Response:', response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <>
      <div className="nav1">
        <NavigationBars />
      </div>
      <section className="akunPage">
        <div className="container-profile">
          <div className="profileForm">
            <div className="akun-header">
              <h2>Akun</h2>
            </div>

            <div className="profileFormm">
              <span className="arrow1">
                <Link to="/Bar">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ fontSize: '24px', color: '#151515' }}
                  />
                </Link>
              </span>
              <div className="bar">
                <Bars />
              </div>

              <div className="profile-picture-container">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />

                <div
                  className="profile-picture-button"
                  onClick={handleChooseFileClick}
                >
                  {imageURL ? ( // Use imageURL if available
                    <img
                      src={imageURL}
                      alt=""
                      className="circular-profile-picture"
                      style={{
                        width: `${imageSize}vw`,
                        height: 'auto',
                      }}
                      onClick={handleImageSizeChange}
                    />
                  ) : profilePicture && ( // Fallback to profilePicture if imageURL is not available
                    <div className="circular-profile-picture-container">
                      <img
                        src={URL.createObjectURL(profilePicture)}
                        alt=""
                        className="circular-profile-picture"
                        style={{
                          width: `${imageSize}vw`,
                          height: 'auto',
                        }}
                        onClick={handleImageSizeChange}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="formBox">
                <div className={`inputBoxx w100 ${loading ? 'loading' : ''}`}>
                  <input
                    type="text"
                    name=""
                    id=""
                    required=""
                    value={userData.username || ''}
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    disabled={loading}
                    readOnly
                  />
                  
                  <label>{loading && (
                  <div className="spin">
                    <PuffLoader color={'#fa4c4c'} loading={loading} size={20}/>
                  </div> 
                )}Name</label>
                </div>
                <div className={`inputBoxx w100 ${loading ? 'loading' : ''}`}>
                  <input
                    type="email"
                    name=""
                    id=""
                    required=""
                    value={userData.email || ''}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    disabled={loading}
                    readOnly
                  />
                  <label>Email{loading && (
                  <div className="spin">
                    <PuffLoader color={'#fa4c4c'} loading={loading} size={20}/>
                  </div> 
                )}</label>
                </div>
                <div className="inputBoxx w100">
                  <input
                    type="text"
                    name=""
                    id=""
                    required=""
                    value={userData.phoneNumber || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                  <label>Mobile Number</label>
                </div>
                <div className="inputBoxx w50">
                  <input
                    type="text"
                    name=""
                    id=""
                    required=""
                    value={userData.country || ''}
                    onChange={(e) =>
                      setUserData({ ...userData, country: e.target.value })
                    }
                  />
                  <label>Negara</label>
                </div>
                <div className="inputBoxx w50">
                  <input
                    type="text"
                    name=""
                    id=""
                    required=""
                    value={userData.city || ''}
                    onChange={(e) =>
                      setUserData({ ...userData, city: e.target.value })
                    }
                  />
                  <label>Kota</label>
                </div>
                <div id="tomb1" className="inputBoxx w100">
                  <input
                    type="submit"
                    defaultValue="Submit"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="foot1">
        <Footerr />
      </div>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>
          {loading ? 'Loading...' : 'Submit successful!'}
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Akun;
