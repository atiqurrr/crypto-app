import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import "./Footer.scss";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            suscipit iste nemo aspernatur nobis eum culpa{" "}
          </p>
        </div>
        <div className="footer__col">
          <h3>About</h3>
          <a href="#">about us</a>
          <a href="#">features</a>
          <a href="#">news</a>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Crytocode</a>
          <a href="#">Security</a>
          <a href="#">Ranking</a>
        </div>
        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__col">
          <h3>Socials</h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" className="footer__icon">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="#" className="footer__icon">
              <FaYoutube></FaYoutube>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
