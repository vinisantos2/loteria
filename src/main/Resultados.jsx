import React, { Component } from 'react'


export default class Resultados extends Component {

    state = {
        pontos15: 0,
        pontos14: 3
    }

    mudar(e) {
      
        this.setState({pontos15: 8})
        console.log(this.state.pontos15+"AQui");

    }
    render() {
        const {pontos15 , pontos14} = this.state;
        return (
            <div>
                <p>
                    Total de jogos com 15 pontos: {pontos15}
                </p>
                <p>
                    Total de jogos com 14 pontos:
                </p>
                <p>
                    Total de jogos com 13 pontos:
                </p>
                <p>
                    Custo:
                </p>
                <p>
                    Possivel retorno:
                </p>
                <button  onClick={e => this.mudar(e)}>ok</button>

            </div>

        )
    }
}