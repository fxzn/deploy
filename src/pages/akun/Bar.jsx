import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faHistory,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Bar.css';

const Bars = () => {
  return (
    <>
      <section>
        <div className="profileInf">
        <div className="akun-headr">
              <h2>Akun</h2>
            </div>
          <Link to="/userprofile">
            <h1>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '16px' }}/>
              <span className="link-text">Profil Saya</span>
            </h1>
          </Link>
          <hr />
          <Link to="/ChangePass">
            <h1>
              <FontAwesomeIcon icon={faLock} style={{ fontSize: '16px' }}/>
              <span className="link-text">Ubah Password</span>
            </h1>
          </Link>
          <hr />
          <Link to="/History">
            <h1>
              <FontAwesomeIcon icon={faHistory} style={{ fontSize: '16px' }}/>
              <span className="link-text">Riwayat Pembayaran</span>
            </h1>
          </Link>
          <hr />
          <Link to="/">
            <h1>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '16px' }}/>
              <span className="link-text">Logout</span>
            </h1>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Bars;
