import React, { Component } from 'react'
import './resultado.css'
import Button from './Button';


export default class Resultados extends Component {

    state = this.props.value
   

    render() {
        const { pontos15, pontos14, pontos13, custo, retorno, } = this.state;
        return (
            <div className='resultados'>
                <p>
                    Total de jogos com 15 pontos: {pontos15}
                </p>
                <p>
                    Total de jogos com 14 pontos: {pontos14}
                </p>
                <p>
                    Total de jogos com 13 pontos: {pontos13}
                </p>
                <p>
                    Custo: {custo}
                </p>
                <p>
                    Possivel retorno: {retorno}
                </p>
               

            </div>

        )
    }
}