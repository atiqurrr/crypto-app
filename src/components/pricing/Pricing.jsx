import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { pricingInfo } from "../../Data";
import "./Pricing.scss";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="pricing">
      <h1 data-aos="fade-up">best cripto service in the world</h1>

      <div className="pricing__container wrapper">
        {pricingInfo.map(({ image, price, name }) => (
          <div className="pricing__card" data-aos="fade-up" key={price}>
            <img src={image} alt="price" />
            <h3>{name}</h3>
            <span>{price}</span>
            <a href="#" className="btn">
              Buy It Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
