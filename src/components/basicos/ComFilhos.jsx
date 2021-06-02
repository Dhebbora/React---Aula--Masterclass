import React from 'react'

export default props =>
    <div>
        <h2>Aqui usamos a lista <br></br>
            para criar os filhos:</h2>
        <div>
            {props.children}
        </div>
    </div>