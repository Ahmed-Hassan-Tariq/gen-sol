import React from 'react'
import './blogs.css';
const Blogs = () => {
  return (
    <div className='blogs_container'>
        <h1>Blogs</h1>
        <div className='blogs_content'>
            Blogs content here
        </div>
        <div className='blogs_container_team'>
            <h1>Team</h1>
            <div className='blogs_container_team_cards'>
                cards
            </div>
            <button>Members</button>
        </div>
    </div>
  )
}

export default Blogs