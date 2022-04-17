import React from 'react'
import './services.css';
import Card from '../../containers/Card/Card';
const Services = () => {
  return (
    <div className='services_container' id='services'><h1>Services</h1>
        <div className='services_content'>
            <div className='services_cards'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='services_description'><h1>Heading</h1>
            <p className='services_description_paragraph'>
              Nullam non viverra lorem. Fusce lacinia quam vitae vestibulum accumsan.
              Sed elementum auctor mi, quis posuere turpis volutpat vitae. Suspendisse eu ex sed velit vestibulum pretium vel a diam.
              Morbi eu ante accumsan, semper lectus vitae, vestibulum nisl.
              Donec sagittis nisl eget ligula euismod cursus.
              Vivamus vulputate, turpis sit amet ultricies placerat, lorem urna dapibus libero, et imperdiet erat tortor at diam.
              Pellentesque pharetra quam eros, quis pharetra libero posuere in. In eu facilisis ligula.
            </p>
            
            
            </div>
        </div>
    
    
    </div>
  )
}

export default Services