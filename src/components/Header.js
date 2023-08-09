import React from 'react';
import { Navbar} from 'react-bootstrap';
import { FaUser } from "react-icons/fa";
import '../styles/Header.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark nav-bar">
      <div className="d-flex align-items-center">
        <button className="navbar-toggler" type="button" onClick={onToggleSidebar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Brand className='ms-3'>Contact List</Navbar.Brand>   
        </div> 
        {/* <div className="d-flex header-profile-container">
          <span className="cursor-pointer fs-6 text-white user-icon"><FaUser/></span>
            <NavDropdown title="AK" id="basic-nav-dropdown" className='header-profile'>
              <NavDropdown.Item href="#action/3.1">aman.kumar@ubona.com</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            </div> */}
      </nav>
    </header>
  );
};

export default Header;
