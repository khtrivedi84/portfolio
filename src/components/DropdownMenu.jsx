// DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu-container">
      <button className="breadcrumb-btn" onClick={toggleMenu}>
        &#9776; Menu
      </button>
      <ul className={`nav nav-pills centered-ul ${showMenu ? 'show' : ''}`}>
        {/* Your list items go here */}
      </ul>
    </div>
  );
};

export default DropdownMenu;
