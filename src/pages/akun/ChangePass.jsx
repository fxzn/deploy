import Footerr from "../../components/footer/Footerr";
import NavigationBars from '../../components/navigation/NavigationBars';
import React from 'react';
import './ChangePass.css';
import Bars from './Bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserProfile = () => {
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
                  <div className="inputBox w100">
                    <input
                      type="password"
                      name="oldPassword"
                      id="oldPassword"
                      required
                    />
                    <label htmlFor="oldPassword">Masukkan Password Lama</label>
                  </div>
                  <div className="inputBox w100">
                    <input
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      required
                    />
                    <label htmlFor="newPassword">Masukkan Password Baru</label>
                  </div>
                  <div className="inputBox w100">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                    />
                    <label htmlFor="confirmPassword">
                      Ulangi Password Baru
                    </label>
                  </div>

                  <div className="inputBox w100" style={{ marginTop: '120px' }}>
                    <input type="submit" value="Submit" />
                  </div>
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
