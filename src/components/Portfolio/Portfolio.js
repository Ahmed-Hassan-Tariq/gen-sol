import React from 'react'
import Slide from '../../containers/Slides/Slide';

import './portfolio.css';
const Portfolio = () => {
  return (
    <div className='portfolio_container' id='portfolio'>
        <h1>Portfolio</h1>
        <div className='portfolio_description'>
            <p>
            Nullam non viverra lorem.
            Fusce lacinia quam vitae vestibulum accumsan.
            Sed elementum auctor mi, quis posuere turpis volutpat vitae.
            Suspendisse eu ex sed velit vestibulum pretium vel a diam.
            Morbi eu ante accumsan, semper lectus vitae, vestibulum nisl.
            Donec sagittis nisl eget ligula euismod cursus.
            Vivamus vulputate, turpis sit amet ultricies placerat, lorem urna dapibus libero, et imperdiet erat tortor at diam.
            Pellentesque pharetra quam eros, quis pharetra libero posuere in. In eu facilisis ligula.
            </p>
        </div>
        <div className='portfolio_slides'>
        {/* <Slide  /> */}
        </div>



    </div>
  )
}

export default Portfolio