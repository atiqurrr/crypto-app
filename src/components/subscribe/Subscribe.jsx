import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          fuga blanditiis eaque quidem doloremque non nesciunt dolor
          necessitatibus odio saepe! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas rem illo fuga eaque delectus blanditiis
          recusandae nam quo ratione dicta.
        </p>
        <form action="#">
          <input type="email" placeholder="Enter Your Email " />
          <a href="#" className="btn">
            Subscribe Now
          </a>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
