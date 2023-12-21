
import Banner from "../../components/banner/Banner";
import Footerr from "../../components/footer/Footerr";
import Header from "../../components/header/Header";
import Partner from "../../components/partner/Partner";
import Services from "../../components/services/Services";
import Events from "../../components/upcomingevent/Events";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Services/>
      <Events/>
      <Partner/>
      <Footerr/>
    </>
  );
}

export default Home;
