import { Button, Container } from "react-bootstrap";
import Footerr from "../../components/footer/Footerr";
import NavigationBars from "../../components/navigation/NavigationBars";
import "./Detailcourse.css";
import imgsucces from "../../assets/succes.png";
import { useNavigate } from "react-router-dom";

function succespayment() {
  const navigate = useNavigate;

  const handleBackClick = () => {
    navigate(`/detailcourse/${title}`);
  };
  return (
    <>
      <NavigationBars />
      <Container className="text-center justify-content-center">
        <div className="header-payment w-75">
          <p className="text-white fw-bold">terima kasih atas pembayaran transaksi</p>
        </div>
        <div className="header-text ">Selamat!!</div>
        <div className="imgsucces mt-5 mb-3">
          <img src={imgsucces} alt="" />
        </div>
        <div className="contentsucces mt-4">
          <p>Transaksi pembayaran kelas premium berhasil! E-receipt telah dikirimkan ke email.</p>
        </div>

        <Button onClick={handleBackClick} variant="primary">
          Mulai Belajar
        </Button>
        <p className="text-danger mt-3">Kembali ke berandda</p>
      </Container>

      <Footerr />
    </>
  );
}

export default succespayment;
