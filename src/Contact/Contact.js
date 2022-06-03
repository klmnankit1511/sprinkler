import React from 'react'
import Card from './Card/Card'
import "./Contact.css"
function Contact() {
  return (
    <div className='container-fluid'>
        <div className='Contact'>
            <div className='Contact__title'>
                <h1>Contact Us</h1>
            </div>
            <div className='Contact__Cards'>
                <Card name = "Anand Kumar"   role="UI/UX Designer" roll = "18033440005" />
                <Card name = "Aniket Kumar"   role="UI/UX Designer" roll = "18033440006" />
                <Card name = "Ankit Kumar"   role="UI/UX Designer" roll = "18033440008" />
                <Card name = "Shubham Labh"   role="UI/UX Designer" roll = "18033440025" />
                <Card name = "Suraj Kumar"   role="UI/UX Designer" roll = "18033440028" />
            </div>
        </div>
    </div>
  )
}

export default Contact