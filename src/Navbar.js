import React from 'react';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav>
      <div className="brand">Your Brand Name</div>
      <button onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
