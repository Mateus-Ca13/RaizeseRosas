import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import BotaoCalcularFrete from '../BotaoCalcularFrete'
import InputEndereco from './InputEndereco';

const AbaEnderecoEstilizada = styled.section`
.flex {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 1280px){
  .flex {
    flex-wrap: wrap;
  }
}
`

export default function AbaEndereco({ taxaEntrega, setTaxaEntrega, setDesconto, setEndereco, setFormaPagamento, endereco }) {

  const [cep, setCep] = useState(false);
  const [inputsPreenchidos, setInputsPreenchidos] = useState({
    endereco: false,
    numero: false,
    complemento: false,
    cidade: false,
    estado: false
  });
   
  function detectarValorNoInput (evento) {

    const idDoInput = evento.target.id;
    console.log(idDoInput)

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
          <InputEndereco id={'endereco'} detectarValorNoInput={detectarValorNoInput}>Endereço</InputEndereco>
          <InputEndereco id={'numero'} detectarValorNoInput={detectarValorNoInput}>N°</InputEndereco>
          <InputEndereco id={'complemento'} detectarValorNoInput={detectarValorNoInput}>Complemento</InputEndereco>
        </div>

        <div className='flex'>
        <InputEndereco id={'cidade'} detectarValorNoInput={detectarValorNoInput}>Cidade</InputEndereco>
        <InputEndereco id={'estado'} detectarValorNoInput={detectarValorNoInput}>Estado</InputEndereco>
        <InputEndereco id={'cep'} filtro setCep={setCep} detectarValorNoInput={detectarValorNoInput}>CEP (Apenas números)</InputEndereco>
        </div>
        
          <BotaoCalcularFrete setDesconto={setDesconto} setFormaPagamento={setFormaPagamento} inputsPreenchidos={inputsPreenchidos} taxaEntrega={taxaEntrega} setTaxaEntrega={setTaxaEntrega} cep={cep}>Calcular frete</BotaoCalcularFrete>
          
      </form>
    </AbaEnderecoEstilizada>
  )
}
