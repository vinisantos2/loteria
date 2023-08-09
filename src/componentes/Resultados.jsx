import React, { Component } from 'react'
import './resultado.css'


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
                <button onClick={e => this.buscar(e)}>ok</button>

            </div>

        )
    }
}