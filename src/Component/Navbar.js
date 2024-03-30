import React, { useState } from 'react';
import './style.css';
import Logo from './imgs/logo.png'
import { CgSearch } from "react-icons/cg";


const MobileMenu = () => {
  return (
    <div className={'mobile-menu'}>
       <ul>
              <li><a class="active" href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
    </div>
  );
};

function Navbar(){
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };
  
    return (
      <>
        <div className='topnav'>
          <div className='logo'>
            <img src={Logo} alt="" />
          </div>
  
          <div className='menu'>
          <ul>
            <li><a href='#home' className='active-link'>
              Home
            </a></li>
              <li><a href='#about' className='active-link'>About</a></li>
              <li><a href='#service' className='active-link'>Service</a></li>
              <li><a href='#contact' className='active-link'>Contact</a></li>
            </ul>
          </div>
  
          {/* This button only shows up on small screens. It is used to open the mobile menu */}
          <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            &#8801;
          </button>
        
  
        {/* The mobile menu and the close button */}
        {isShown && <MobileMenu />}
        {isShown && (
          <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
            &times;
          </button>
        )}

        <div class="search-container">
        <input type="text" id="search-input" placeholder="Search..." />
        <button type="submit" id="search-button">
          <CgSearch />
        </button>
      </div>
      </div>
      </>
    );
  }
  
  export default Navbar;