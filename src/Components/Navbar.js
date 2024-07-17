import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/add-student">Add Student</Link>
        </li>
        <li>
          <Link to="/GetStudents">GetStudents</Link>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;