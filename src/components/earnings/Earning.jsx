import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Img from "../../assets/earnings.png";
import "./Earning.scss";

const Earning = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt="earings" />
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            sunt ipsum quaerat quis
          </p>
          <a href="" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default Earning;
