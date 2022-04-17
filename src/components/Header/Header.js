import React from 'react'
import Navbar from '../Navbar/Navbar';
import logo from '../../Assets/gen1logo_transparent.svg';
import './header.css';
export const Header = () => {
  return (
    <div className='header_container'>
        <Navbar/>
        <div className='header_content' id='home'>
        
          <div className='header_logo'><img src={logo} alt='logo'/> <button>Get Started</button></div>
          <div className='header_title'><h1>Heading</h1>
          <p>Fusce porttitor bibendum massa, at dapibus nisl aliquam eu.
          Cras laoreet elementum elit in mattis.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aenean viverra mattis maximus.
          Suspendisse vel lorem metus.
          Curabitur hendrerit blandit sollicitudin.
          Nullam varius sapien ligula, a tempor ligula porttitor varius.
          Etiam luctus, libero et facilisis egestas, mauris ipsum tempor odio, ut interdum augue elit at augue.
          Cras tempus egestas velit, sed dapibus ex gravida a.
          Morbi ex risus, imperdiet a sem quis, cursus volutpat mauris.</p>
          
          </div>

        </div>
    </div>
  )
}
