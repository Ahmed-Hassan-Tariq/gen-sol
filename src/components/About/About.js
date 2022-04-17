import React from 'react'
import {BiVideoPlus} from 'react-icons/bi';
import './about.css';
const About = () => {
  return (
    <div className='about_container' id='about'><h1>Our Speciality</h1>
        <div className='about_content'>
            <div className='about_description'>
              <div className='about_description_content'>
                <h2>Heading</h2>
                <p className='about_description_paragraph'>
              Nullam non viverra lorem. Fusce lacinia quam vitae vestibulum accumsan.
              Sed elementum auctor mi, quis posuere turpis volutpat vitae. Suspendisse eu ex sed velit vestibulum pretium vel a diam.
              Morbi eu ante accumsan, semper lectus vitae, vestibulum nisl.
              Donec sagittis nisl eget ligula euismod cursus.
              Vivamus vulputate, turpis sit amet ultricies placerat, lorem urna dapibus libero, et imperdiet erat tortor at diam.
              Pellentesque pharetra quam eros, quis pharetra libero posuere in. In eu facilisis ligula.
                </p><button>Learn more</button>
              </div>
              
            </div>
            <div className='about_video'><BiVideoPlus className='about_video_icon' size='450px'/></div> 
        </div>   
    </div>
  )
}


export default About