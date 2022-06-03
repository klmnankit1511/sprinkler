import React from 'react'
import "./Card.css"
function Card(props) {
    return (
        <div className="Contact__Card">
            <div className='Contact__Card__img'>
                {/* <img src="https://raw.githubusercontent.com/klmnankit1511/ANKIT-kumar/master/harendra.jpg?token=GHSAT0AAAAAABUWGQEOHPFBYQ2IUYDTY334YUYMGKQ" /> */}
            </div>
            <div className='Contact__Card__content Contact__Card__name'>{props.name}</div>
            <div className='Contact__Card__content Contact__Card__role'>{props.role}</div>
            <div className='Contact__Card__content Contact__Card__session'>{"Session " + " 2018-2022"}</div>
            <div className='Contact__Card__content Contact__Card__branch'>{"CSE"}</div>
            <div className='Contact__Card__content Contact__Card__roll'>{props.roll}</div>
            <div className='Contact__Card__Social'>
                <ul>
                    <li><a href="https://www.facebook.com/recstudentportal" target="_blank"><abbr title="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></abbr></a></li>
                    <li><a href="tel:-"><abbr title="Phone"><i class="fa fa-phone" aria-hidden="true"></i></abbr></a></li>
                    <li><a href="mailto:jaspritkaur1603@gmail.com"><abbr title="Mail"><i class="fa fa-envelope" aria-hidden="true"></i></abbr></a></li>
                    <li><a href="https://in.linkedin.com/" target="_blank"><abbr title="Linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></abbr></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Card