import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Mob from "../../assets/Mob.png";
import "./Hero.scss";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="mob" />
        </div>
        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Make easier you crypto tansitions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            ullam voluptatum amet repellat veniam similique ipsam itaque libero
            error blanditiis placeat, quaerat esse optio eaque ex voluptates!
            Optio, aut eveniet!
          </p>
          <a href="" className="btn">
            TRY YOUR FREE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
