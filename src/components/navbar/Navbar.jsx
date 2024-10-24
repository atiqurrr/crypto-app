import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a onClick={() => setShowNav(false)} href="" className="navbar__logo">
          <img src={Logo} alt="logo" />
        </a>

        <ul className={`${showNav ? "show" : ""}`}>
          <li onClick={() => setShowNav(false)}>
            <a href="#">product</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">company</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">pricing</a>
          </li>
          <li onClick={() => setShowNav(false)}>
            <a href="#">blog</a>
          </li>
        </ul>

        <div className="navbar__btns">
          <a href="#">login</a>
          <a href="#" className="btn">
            register
          </a>
        </div>
        <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
