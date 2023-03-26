import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);

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
            <p className="nav">Event</p>
            <p className="nav">About</p>
            <p className="nav">Contact</p>
            <p className="nav">Donate</p>
          </div>
        )}
      </button>
    </div>
  );
};

export default Nav;
