import React from 'react'
import {MdEmail, MdPhoneEnabled} from 'react-icons/md';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {SiWhatsapp, SiInstagram, SiFacebook, SiTwitter} from 'react-icons/si';
import './contact.css';
export const Contact = () => {
  return (
    <div className='contact_container' id='contact'>
        <h1>Contact Us</h1>
        <div className='contact_details'>
            <div className='contact_details_icons'><MdEmail className='contact_details_icon_logo' size='50px'/></div>
            <div className='contact_details_icons'><MdPhoneEnabled className='contact_details_icon_logo' size='50px'/>  </div>
            <div className='contact_details_icons'><FaMapMarkerAlt className='contact_details_icon_logo' size='50px' />  </div>
        </div>
        <div className='contact_details_container'>
            <div className='contact_details_credentials'>
                <input name='name' label='name' placeholder='Name'/>
                <input name='email' label='email' placeholder='Email'/>
                <input name='phone' label='phone' placeholder='Phone'/>
            
           </div>

           <div className='contact_details_message'>
            <textarea name='message' label='message' placeholder='Message'/>
            </div>
            


            
        </div>
        <button>SEND</button>

        <div className='contact_logos'>
            <SiWhatsapp className='logos_content' color='#ffffff' size='40px'/>
            <SiInstagram className='logos_content' color='#ffffff' size='40px'/>
            <SiFacebook className='logos_content' color='#ffffff' size='40px'/>
            <SiTwitter className='logos_content' color='#ffffff' size='40px'/>
        </div>

        <p>2022©genuinesolutions. All rights reserved</p>
    </div>
  )
}
