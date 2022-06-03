import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <a class="card" href={props.url} target="_blank">
      <div class="card__background" style={{backgroundImage: "url("+`${props.img}`+")"}}></div>
      <div class="card__content">
        <p class="card__category">{props.title}</p>
        <h3 class="card__heading">{props.describe}</h3>
      </div>
    </a>
  )
}

export default Card