import React, { useEffect } from 'react';
import '../styles/Sidebar.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineHome } from "react-icons/md";
const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && !isSidebarVisible) {
        setIsSidebarVisible(true);
      }else if(window.innerWidth < 768){
        setIsSidebarVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarVisible, setIsSidebarVisible]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : 'sidebar-hidden'}`}>
      <ul className="sidebar-nav">
          <NavLink to="/home" className="sidebar-link" onClick={handleLinkClick}>
          <li className="sidebar-item  d-flex"><MdOutlineHome className='fs-4 me-1'/>Home</li>
          </NavLink>
          {/* <NavLink to="/contact" className="sidebar-link" onClick={handleLinkClick}>
          <li className="sidebar-item d-flex"><MdCall className='fs-4 me-1'/>Add Contact</li>
          </NavLink>
          <NavLink to="/about" className="sidebar-link" onClick={handleLinkClick}>
          <li className="sidebar-item d-flex"><MdPerson4 className='fs-4 me-1'/>About</li>
          </NavLink> */}
      </ul>
    </div>
  );
};

export default Sidebar;

