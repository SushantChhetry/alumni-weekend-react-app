import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {

    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="navbtn" size="2xl" />
        {isOpen ? (
          <div className="mobile-menu">{}</div>
        ) : (
          <div className="desktop-menu">
            <ul className="nav-list">
              <li>
                <Link href="#event" legacyBehavior>
                  <a>Event</a>
                </Link>
              </li>
              <li>
                <Link href="#about" legacyBehavior>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="#contact" legacyBehavior>
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#gallery" legacyBehavior>
                  <a>Gallery</a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.jsu.edu/ihopreunion/give-back.html"
                  legacyBehavior
                >
                  <a target="_blank">Donate</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </div>
  );
};

export default Nav;
