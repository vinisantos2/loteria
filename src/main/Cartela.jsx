import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cartela.css'
import Button from '../componentes/Button'
import NumeroSelecionados from '../componentes/numeroSelecionados'
import Resultados from '../componentes/Resultados'
import Jogo from '../componentes/jogo'


const initialState = {
    numerosSelecionados: [],
    stringNumeros: ""
}



const jogo = "Lotofácil"


export default class Cartela extends Component {



    state = { ...initialState }




    constructor(props) {
        //construtor e passsando a variavel this para as funções 
        super(props)
        this.clickBotao = this.clickBotao.bind(this);

    }




    clickBotao(n) {
        this.state.stringNumeros = ""


        // verifica se usuario ja escolheu a dezena
        if (this.state.numerosSelecionados.includes(n)) {
            const index = this.state.numerosSelecionados.indexOf(n)
            if (index > -1) {
                this.state.numerosSelecionados.splice(index, 1);
                this.adicionarNoArray(false)
                return
            }
        }

        // verifica a quantidade de dezenas que o usuario escolheu 
        if (this.state.numerosSelecionados.length === 18) {
            return
        }


        this.adicionarNoArray(true, n)




    }



    adicionarNoArray(adicionar, n) {
        if (adicionar) {
            // salva no array as dezenas
            this.state.numerosSelecionados.push(n)
        }
        // salva em um array para mostrar ao usuario 
        this.state.numerosSelecionados.forEach(value => {
            this.state.stringNumeros += value + " "
        })
        this.setState({
            ...this.state.stringNumeros
        })

        console.log(this.state.numerosSelecionados)

    }




    render() {
        return (
            <div className="cartela">
                {/* Mostra qual é o tipode jogo */}
                <Jogo value={jogo} />
                {/* mostra os números selecionado pelo usuario */}
                <NumeroSelecionados value={this.state.stringNumeros} dezenas={this.state.numerosSelecionados.length} />
                <div className='ordenarButoes'>
                    <Button label="01" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="02" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="03" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="04" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="05" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="06" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="07" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="08" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="09" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="10" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="11" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="12" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="13" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="14" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="15" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="16" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="17" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="18" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="19" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="20" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="21" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="22" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="23" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="24" click={this.clickBotao} array={this.state.numerosSelecionados} />
                    <Button label="25" click={this.clickBotao} array={this.state.numerosSelecionados} />
                </div>

                {/* envia os numeros selecionados para o componente Resultados*/}
                <Resultados value={this.state.numerosSelecionados} />
            </div>
        )
    }
}