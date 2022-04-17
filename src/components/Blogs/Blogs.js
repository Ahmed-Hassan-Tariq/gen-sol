import React from 'react'
import Member from '../../containers/Member/Member';
import './blogs.css';
const Blogs = () => {
  return (
    <div className='blogs_container' id='blogs'>
        <h1>Blogs</h1>
        <div className='blogs_content'>
            Blogs Content Component Here
        </div>
        <div className='blogs_container_team'>
            <h1>Team</h1>
            <div className='blogs_container_team_cards'>

              <Member name={"Ahmed Hassan Tariq"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dictum quam, et rhoncus dui. Cras sed ultricies tortor, ut condimentum ligula."}/>
              <Member name={"Ahmed Hassan Tariq"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dictum quam, et rhoncus dui. Cras sed ultricies tortor, ut condimentum ligula."}/>
              <Member name={"Ahmed Hassan Tariq"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec dictum quam, et rhoncus dui. Cras sed ultricies tortor, ut condimentum ligula."}/>

            </div>
            
            <button>Members</button>
        </div>
    </div>
  )
}

export default Blogs