import React from 'react'

import './navbar.css';
// import logo from '../../Assets/gen1logo_white_text_transparent.png';


const Navbar = () => {
  return (
    <div className='navbar_container'>

        <div className='navbar_links_black'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
        </div>
        <div className='navbar_links_white'>
            <a href='#blog'>Blogs</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact Us</a>
        </div>

    </div>
  )
}

export default Navbar