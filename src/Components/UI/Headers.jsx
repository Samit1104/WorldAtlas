import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul className="menu-mobile">
              <li onClick={closeMenu}>
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink to="/about" style={{ textDecoration: "none" }}>
                  About
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink to="/country" style={{ textDecoration: "none" }}>
                  Country
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink to="/contact" style={{ textDecoration: "none" }}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
