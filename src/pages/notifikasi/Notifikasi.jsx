import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationBars from '../../components/navigation/NavigationBars';
import Footerr from "../../components/footer/Footerr";
import './Notifikasi.css';

const UserProfile = () => {
  library.add(faBell);

  // Function to format the date and time
  const formatDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('id-ID', { month: 'long' });
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return {
      date: `${day} ${month}`,
      time: `${hour}:${minutes < 10 ? '0' : ''}${minutes}`,
    };
  };

  return (
    <>
      <NavigationBars />
      <section>
        <div className="cont-profile">
          <div className="profileForm">
            <div className="notif-header">
              <h2>Notifikasi</h2>
            </div>

            {[1, 2, 3].map((index) => (
              <div className="nobell" key={index}>
                <div className="card-content">
                  <div className="icon-container">
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{
                        color: 'white',
                        backgroundColor: '#fa4c4c',
                        borderRadius: '50%',
                        padding: '5px',
                      }}
                    />
                  </div>
                  <div className="detail">
                    <span className="time">
                      {formatDate().date}, {formatDate().time}{' '}
                      <span className="circle"></span>
                    </span>
                    <span className="tulisan">Promosi</span>
                    <div className="keterangan">
                      <h3>Dapatkan Potongan 50% selama Bulan Maret!</h3>
                      <h5>Syarat dan Ketentuan berlaku!</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footerr />
    </>
  );
};

export default UserProfile;
