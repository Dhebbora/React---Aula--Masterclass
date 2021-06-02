import React from 'react'

export default props=>
    <div>
        <h3>Componente filho</h3>
        <p>{props.children} - {props.Sobrenome}</p>
    </div>