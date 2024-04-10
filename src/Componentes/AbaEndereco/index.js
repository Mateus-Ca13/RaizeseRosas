import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import BotaoCalcularFrete from '../BotaoCalcularFrete'

const AbaEnderecoEstilizada = styled.section`

label {
  font-size: 18px;
  
}
form input {
  background-color: var(--verde-secundario);
  border: none;
  border-radius: 10px;
  padding: 0 1em;
  font-family: var(--fonte);
  font-size: 18px;

  
}
.column {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em ;
  
}
.flex {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1280px){
  .flex {
    flex-wrap: wrap;
  }
  .column {
    margin: 0.5em 0;
    width: 90%;
  }
}

@media screen and (max-width: 780px){
  .flex {
    flex-wrap: wrap;
  }

  .column {
    margin: 0.5em 0;
    width: 100%;
  }
}

@media screen and (max-width: 680px){
  

  

  form input, label {
    font-size: 14px;
  }
}

`

export default function AbaEndereco({ taxaEntrega, setTaxaEntrega, setDesconto, setEndereco, endereco }) {

  const [cep, setCep] = useState(false);
  const [inputsPreenchidos, setInputsPreenchidos] = useState({
    endereco: false,
    numero: false,
    complemento: false,
    cidade: false,
    estado: false
  });

  function filtroDeTeclas(e) {
    const ultimaTecla = e.target.value.slice(-1);

    if (!isNaN(Number(ultimaTecla))) {
      if (e.target.value.length < 9) {
        setCep(e.target.value)
      }
      else {
        e.target.value = e.target.value.slice(0, -1);
      }
    }
    else {
      e.target.value = e.target.value.slice(0, -1);
    }
  }

  function detectarValorNoInput (evento) {

    const idDoInput = evento.target.id;

    if(evento.target.value.length > 0){
        setInputsPreenchidos({...inputsPreenchidos, [idDoInput]: true});
        setEndereco({...endereco, [idDoInput]: evento.target.value})
        
      }
      else {
      setInputsPreenchidos({...inputsPreenchidos, [idDoInput]: false});
    }
  }

  return (
    <AbaEnderecoEstilizada>
      <h2>Adicionar Endereço</h2>

      <form>
        <div className='flex'>
          <div className='column'>
            <label for='endereco'>Endereço</label>
            <input id='endereco' onChange={(e) => {detectarValorNoInput(e)}}></input>
          </div>

          <div className='column'>
            <label for='numero'>N°</label>
            <input id='numero' onChange={(e) => {detectarValorNoInput(e)}}></input>
          </div>

          <div className='column'>
            <label for='complemento'>Complemento</label>
            <input id='complemento' onChange={(e) => {detectarValorNoInput(e)}}></input>
          </div>
        </div>

        <div className='flex'>
          <div className='column'>
            <label for='cidade'>Cidade</label>
            <input id='cidade' onChange={(e) => {detectarValorNoInput(e)}}></input>
          </div>

          <div className='column'>
            <label for='estado'>Estado</label>
            <input id='estado' onChange={(e) => {detectarValorNoInput(e)}}></input>
          </div>

          <div className='column'>
            <label for='cep'>CEP (apenas números)</label>
            <input onChange={(e) => { filtroDeTeclas(e) }} id='cep'></input>
          </div>
        </div>
        
          <BotaoCalcularFrete setDesconto={setDesconto} inputsPreenchidos={inputsPreenchidos} taxaEntrega={taxaEntrega} setTaxaEntrega={setTaxaEntrega} cep={cep}>Calcular frete</BotaoCalcularFrete>
          
      </form>
    </AbaEnderecoEstilizada>
  )
}
