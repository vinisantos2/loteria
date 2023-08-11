import React, { Component } from 'react'
import './resultado.css'
import apiloteria from '../assets/js/api-loterias'


export default class Resultados extends Component {

    state = {
        pontos15: 0,
        pontos14: 3,
        pontos13: 0,
        custo: 0,
        retorno: 0,
    }

    buscar(e) {
        this.setState(
            {
                pontos15: 0,
                pontos14: 0,
                pontos13: 0,
                custo: 0,
                retorno: 0,
            })
        console.log(this.state.pontos15 + "AQui");

    }
    render() {
        const { pontos15, pontos14, pontos13, custo, retorno, } = this.state;
        return (
            <div className='resultados'>
                <p id="15pontos">
                    Total de jogos com 15 pontos: {}
                </p>
                <p id="14pontos">
                    Total de jogos com 14 pontos: {}
                </p>
                <p id="13pontos">
                    Total de jogos com 13 pontos: {}
                </p>
                <p>
                    Custo: {custo}
                </p>
                <p>
                    Possivel retorno: {retorno}
                </p>
                <button onClick={e => this.buscar(e) + apiloteria.getLoterias()}>ok</button>

            </div>

        )
    }
}