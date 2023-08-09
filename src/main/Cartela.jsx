import React, { Component } from 'react'
import './Cartela.css'

import Button from '../componentes/Button'
import NumeroSelecionados from '../componentes/numeroSelecionados'
import Resultados from '../componentes/Resultados'
import Jogo from '../componentes/jogo'




const initialState = {
    ativo: false,
    numerosSelecionados: [],
    stringNumeros: [],
    resultados: {
        pontos15: 0,
        pontos14: 0,
        pontos13: 0
    } 

}

const jogo = "Lotofácil"


export default class Cartela extends Component {
    
    state = { ...initialState }
    
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.clickBotao = this.clickBotao.bind(this);

    }

    clearMemory() {
        this.setState({ ...initialState })
    }



    clickBotao(n) {

        if (this.state.numerosSelecionados.length == 17) {
            return
        }

        if (this.state.numerosSelecionados.includes(n)) {
            return
        }

        this.state.numerosSelecionados.push( n )
        

        this.setState({
            ...this.state.stringNumeros.push( n +' ')
        })


        console.log(this.state.numerosSelecionados)

    }


    render() {
      
        return (
            <div className="Cartela">
                <Jogo value={jogo} />
                <NumeroSelecionados value={this.state.stringNumeros} />
                <Button label="01" click={this.clickBotao} operation />
                <Button label="02" click={this.clickBotao} />
                <Button label="03" click={this.clickBotao} />
                <Button label="04" click={this.clickBotao} />
                <Button label="05" click={this.clickBotao} />
                <Button label="06" click={this.clickBotao} />
                <Button label="07" click={this.clickBotao} />
                <Button label="08" click={this.clickBotao} />
                <Button label="09" click={this.clickBotao} />
                <Button label="10" click={this.clickBotao} />
                <Button label="11" click={this.clickBotao} />
                <Button label="12" click={this.clickBotao} />
                <Button label="13" click={this.clickBotao} />
                <Button label="14" click={this.clickBotao} />
                <Button label="15" click={this.clickBotao} />
                <Button label="16" click={this.clickBotao} />
                <Button label="17" click={this.clickBotao} />
                <Button label="18" click={this.clickBotao} />
                <Button label="19" click={this.clickBotao} />
                <Button label="20" click={this.clickBotao} />
                <Button label="21" click={this.clickBotao} />
                <Button label="22" click={this.clickBotao} />
                <Button label="23" click={this.clickBotao} />
                <Button label="24" click={this.clickBotao} />
                <Button label="25" click={this.clickBotao} />
                <Resultados value={this.state.resultados} />
            </div>
        )
    }
}
