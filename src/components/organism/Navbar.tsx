import { Link } from "react-router";
import style from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={style.navbar}>
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
      </Link>
      <ul className={style.navbarMenuDesktop}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/create-plan">CREATE A PLAN</Link>
        </li>
      </ul>

      <div
        className={style.hamburgerMenu}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 
        <img src="/assets/shared/mobile/icon-close.svg" alt="Close Menu" /> :
        <img src="/assets/shared/mobile/icon-hamburger.svg" alt="Hamburger Menu" />}

      </div>


        <ul className={`${style.navbarMenuMobileDrop} ${isMobileMenuOpen && style.open } `}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/create-plan">CREATE A PLAN</Link>
          </li>
        </ul>

    </nav>
  );
};

export default Navbar;
