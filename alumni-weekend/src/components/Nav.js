import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // Never leave console logs
    console.log(isOpen);

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Why did you go with this approach rather than defaulting the state to true?
    setIsOpen(true);
  }, []);

  return (
    <div className="nav">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="navbtn" size="2xl" />
        {isOpen ? (
          // I feel like you forgot something here {} ?
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
