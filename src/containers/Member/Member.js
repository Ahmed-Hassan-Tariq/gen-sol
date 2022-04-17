import React from 'react'
import {CgProfile} from 'react-icons/cg';

import './member.css';
const Member = ({name, description, imageUrl}) => {
  return (
    <div className='member_container'>

        <CgProfile size='50px'/>
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Member