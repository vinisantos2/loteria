import React from 'react'
import './numerosSelecionados.css'

export default props =>
    <div className="numerosSelecionados">
        <p>Números: {props.value}</p>
        <p>Dezenas: {props.dezenas}</p>
    </div>