import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLock,
  faHistory,
  faLeftLong,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Bar.css';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Bars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmDelete = async () => {
    try {
      setIsLoading(true);

      const token = localStorage.getItem('token');
      const response = await axios.delete(
        'http://easy-class-407401.et.r.appspot.com/api/user/delete',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success('Account deleted successfully');
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
      } else {
        toast.error('Failed to delete account');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setShowConfirmationModal(false);
    }
  };

  return (
    <>
      <section>
        <div className="profileInf">
          <div className="akun-headr">
            <h2>Akun</h2>
          </div>
          <Link to="/userprofile">
            <h1>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '16px' }} />
              <span className="link-text">Profil Saya</span>
            </h1>
          </Link>
          <hr />
          <Link to="/ChangePass">
            <h1>
              <FontAwesomeIcon icon={faLock} style={{ fontSize: '16px' }} />
              <span className="link-text">Ubah Password</span>
            </h1>
          </Link>
          <hr />
          <Link to="/History">
            <h1>
              <FontAwesomeIcon icon={faHistory} style={{ fontSize: '16px' }} />
              <span className="link-text">Riwayat Pembayaran</span>
            </h1>
          </Link>
          <hr />

          <Link onClick={handleDeleteClick}>
            <h1>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ fontSize: '16px' }}
              />
              <span className="link-text">Delete Account</span>
            </h1>
          </Link>

          {/* Modal Konfirmasi */}
          <Modal show={showConfirmationModal} onHide={handleCancel}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {isLoading ? (
                <div>
                  <p>Deleting your account, please wait...</p>
                  <BarLoader
                    color="#FF5733"
                    loading={isLoading}
                    className="override"
                  />
                </div>
              ) : (
                'Are you sure you want to delete your account?'
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          <hr />
          <Link to="/">
            <h1>
              <FontAwesomeIcon
                icon={faLeftLong}
                style={{ fontSize: '16px' }}
              />
              <span className="link-text">Back</span>
            </h1>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Bars;
