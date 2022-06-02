import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className='Services__Card'>
        <div className='Services__Card__title'>{props.title}</div>
        <div className='Services__Card__btn'>
            <button>Start</button>
        </div>
    </div>
  )
}

export default Card