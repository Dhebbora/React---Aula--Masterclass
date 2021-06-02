import './Card.css'
import React from 'react'


export default props =>
    <div className="Card">

        <div className="content">
            {props.children}
        </div>

        <div className="footer" style={{ backgroundColor:props.color}}>
            {props.titulo}
        </div>

    </div>