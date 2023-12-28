import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  // const handleCardClick = (coursetitle) => {
  //   navigate(`/detailcourse/${coursetitle}`);
  // };

  const handleBackToHomepage = () => {
    navigate ("/")
  }
  return (
    <>
      <main>
        <div className="main-wrapper">
          <picture className="scarecrow-img">
            <img src="https://raw.githubusercontent.com/nat-oku/devchallenges/main/Scarecrow.png" alt="scarecrow" />
          </picture>
          <div className="error-text">
            <h2>I have bad news for you</h2>
            <p>The page you are looking for might be removed or is temporarily unvailable.</p>
            <span className="input-group-btn">
              <button className="not-found-btn" type="button" onClick={handleBackToHomepage}>
                Back to homepage
              </button>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
