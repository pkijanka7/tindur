import logo from "./../pages/images/logo.png"
import React from 'react';


const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <>
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
    </>
  );
};
export default Nav;
