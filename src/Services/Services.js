import React from 'react'
import Card from './Card/Card'
import "./Services.css"
function Services() {
  return (
    <div className='container-fluid'>
        <div className='Services'>
            <div className='Services__title'>
                <h1>Services</h1>
            </div>
            <div className='Services__Cards'>
                <Card title = {"Water Label History"} />
                <Card title = {"Automatic Isolating"}/>
                <Card title = {"Brute Force Waterly"}/>
            </div>
        </div>

    </div>
  )
}

export default Services