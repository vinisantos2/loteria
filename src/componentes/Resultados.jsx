import React, { Component } from 'react'
import './resultado.css'
import axios from 'axios'

//const url = "https://loteriascaixa-api.herokuapp.com/api/lotofacil/"
const url = "http://localhost:3001/lotofacil"

const initialState = {

    jogos: [],
    numerosSelecionados: [],
    pontos15: 0,
    pontos14: 0,
    pontos13: 0,
    valor: 0

}


export default class Resultados extends Component {


    state = { ...initialState }

    constructor(props) {
        super(props)
        this.compararJogos = this.compararJogos.bind(this);
        this.click = this.click.bind(this);
    }

    async click() {
       await axios(url).then(resp => {
            this.setState({ jogos: resp.data })
        })
        this.compararJogos()
    }


    compararJogos() {
        this.state.numerosSelecionados = this.props.value
        let contador = 0
        let pontos15 = 0
        let pontos14 = 0
        let pontos13 = 0
        let valor = 0
        // primeiro for para ver os jogos que ja foram sorteados 
        for (let i = 0; i < this.state.jogos.length; i++) {
            // segundo for para percorrer as dezenas escolhidas pelo cliente
            for (let j = 0; j < this.state.numerosSelecionados.length; j++) {
                //verifica se a dezena escolhida pelo cliente existe no jogo ja sorteado
                if (this.state.jogos[i].dezenas.includes(this.state.numerosSelecionados[j])) {
                    contador++
                }
            }
            // verifica se a quantidade de pontos feito pelo cliente em cada jogo 
            if (contador == 15) {
                pontos15++
                valor += this.state.jogos[i].premiacoes[0].valorPremio
                this.setState({
                    pontos15: pontos15,
                    valor: valor
                })

            } else if (contador == 14) {
                pontos14++
                valor += this.state.jogos[i].premiacoes[1].valorPremio
                this.setState({
                    pontos14: pontos14,
                    valor: valor
                })
            } else if (contador == 13) {
                valor += this.state.jogos[i].premiacoes[2].valorPremio
                pontos13++
                this.setState({
                    pontos13: pontos13,
                    valor: valor
                })
            }

            contador = 0

        }
    }

    clearMemory() {
        // limpar as dezenas que o usuario escolheu
        window.location.reload(true)
    }

    render() {


        const { pontos15, pontos14, pontos13, valor } = this.state;
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
                    Possivel retorno: {valor.toFixed(2)} R$
                </p>
                {/* <button onClick={e => this.buscar(e) + apiloteria.getLoterias(this.state)}>ok</button> */}
                <div className='butoes'>
                    <button className="btn btn-primary btn-sm botao" onClick={this.click}>ok</button>
                    <button onClick={this.clearMemory} type="button" className="btn btn-primary btn-sm botao" > Limpar</button>
                </div>

            </div>

        )
    }
}
