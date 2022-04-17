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
            <div className='services_description'><h2>Heading</h2>
            <p>Lorem ipsum</p>
            
            
            </div>
        </div>
    
    
    </div>
  )
}

export default Services