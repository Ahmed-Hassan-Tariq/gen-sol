import React from 'react'
import Navbar from '../Navbar/Navbar';
import logo from '../../Assets/gen1logo_transparent.png';
import './header.css';
export const Header = () => {
  return (
    <div className='header_container'>
        <Navbar/>
        <div className='header_content' id='home'>
        
          <div className='header_logo'><img src={logo} alt='logo'/> <button>Get Started</button></div>
          <div className='header_title'><h1>Heading</h1>
          <p>Lorem ipsum</p>
          
          </div>

        </div>
    </div>
  )
}
