import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);

    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="navbtn" />
        {isOpen ? (
          <div className="mobile-menu">{/*insert links to mobile menu*/}</div>
        ) : (
          <div className="desktop-menu">
            {/** insert links to desktop menu */}
          </div>
        )}
      </button>
    </div>
  );
};

export default Nav;
