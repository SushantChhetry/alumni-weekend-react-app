import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen);

    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
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
