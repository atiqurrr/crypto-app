import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { companyInfo } from "./../../Data";
import "./Company.scss";

const Company = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="companies">
      <div className="companies__container wrapper" data-aos="fade-up">
        {companyInfo.map(({ id, img, link }) => (
          <a href={link} key={id}>
            <img src={img} alt="company" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Company;
