import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import StatusImg from "../../assets/status.png";
import "./Status.scss";

const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="fade-right">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            assumenda. Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="btn">
            See More
          </a>
        </div>
        <div className="status__right" data-aos="fade-left">
          <img src={StatusImg} alt="status_img" />
        </div>
      </div>
    </section>
  );
};

export default Status;
