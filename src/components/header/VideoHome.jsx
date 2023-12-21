import "./VideoHome.css";

function VideoHome({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="video-modal-overlay">
          <div className="video-modal">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <iframe width="560" height="355" src=" https://www.youtube.com/embed/ixOd42SEUF0?si=NRz0mkus-c82Fnmh" title="YouTube video player" frameBorder="5" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoHome;
