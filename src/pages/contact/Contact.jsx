
import Footerr from "../../components/footer/Footerr";
import NavigationBars from "../../components/navigation/NavigationBars";
import "./Contact.css";

function Contact() {
  return (
    <>
      <NavigationBars />
      <section>
        <div className="container-contact">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img src="img/location.png" alt="" />
                  </span>
                  <span>
                    8 Sutherland Street
                    <br />
                    Melbourne, Victoria
                    <br />
                    3000
                  </span>
                </li>
                <li>
                  <span>
                    <img src="img/mail.png" alt="" />
                  </span>
                  <span>desmondjeon@gmail.com</span>
                </li>
                <li>
                  <span>
                    <img src="img/call.png" alt="" />
                  </span>
                  <span>0481-111-111</span>
                </li>
              </ul>
            </div>
            <ul className="socialIcon">
              <li>
                <a href="#">
                  <img src="img/1.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/2.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/3.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/4.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/5.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="" id="" required="" />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" id="" required="" />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" name="" id="" required="" />
                <span>Email</span>
              </div>
              <div className="inputBox w50">
                <input type="text" name="" id="" required="" />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea name="" id="" required="" defaultValue={""} />
                <span>Write Your Message Here.</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" defaultValue="Submit" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerr/>
    </>
  );
}

export default Contact;
