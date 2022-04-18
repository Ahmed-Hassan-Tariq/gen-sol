import React from 'react'
import Member from '../../containers/Member/Member';
import Slide from '../../containers/Slides/Slide';

import './blogs.css';
const Blogs = () => {
  return (
    <div className='blogs_container' id='blogs'>
        {/* <h1>Blogs</h1> */}

            {/* <Slide/> */}
            
        
        <div className='blogs_container_team'>
            <h1>Team</h1>
            <div className='blogs_container_team_cards'>

              <Slide/>

            </div>
            
            <button className='blogs_member_button'>Members</button>
        </div>
    </div>
  )
}

export default Blogs