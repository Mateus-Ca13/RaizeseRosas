import React from 'react'
import styled from 'styled-components'
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { BsBank } from "react-icons/bs";


const AbaPagamentoEstilizada = styled.section`

.opcao {
  display: flex;
  align-items: center;
  background-color: var(--verde-secundario);
  margin: 0.5em;
  border-radius: 10px;
  padding: 1em;

  p, input {
    margin: 0 0.5em;
  }

  select {
    background-color: var(--verde-principal);
    border: none;
    font-family: var(--fonte);
    padding: 2px;
    border-radius: 5px;
  }
}

@media screen and (max-width: 1280px){
  max-width: 90%;
}

@media screen and (max-width: 780px){
  max-width: 100%;

   .credito {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em 0;

    select {
      margin-left: 1em;
    }
  }
}
@media screen and (max-width: 680px){

  form {
    font-size: 14px;
  }

  .opcao {
    padding: 0.5em;
  }
}
`

export default function AbaPagamento({ precoTotal, setFormaPagamento}) {
  return (
    <AbaPagamentoEstilizada>
      <h2>Forma de Pagamento</h2>

      <form>
        <div className='opcao'>
          <input type='radio' name='pagamento' onClick={() => {setFormaPagamento("Pix (à vista)")}}/><FaPix/><p>PIX (à vista)</p>
        </div>
        <div className='opcao credito'>
          <input type='radio' name='pagamento' onClick={() => {setFormaPagamento("Cartão de Crédito")}}/><FaRegCreditCard/><p>Cartão de Crédito</p>   
          <select>
            <option>1x de R${(precoTotal / 1).toFixed(2)} sem juros</option>
            <option>2x de R${(precoTotal / 2).toFixed(2)} sem juros</option>
            <option>3x de R${(precoTotal / 3).toFixed(2)} sem juros</option>
            <option>4x de R${(precoTotal / 4).toFixed(2)} sem juros</option>
            <option>5x de R${(precoTotal / 5).toFixed(2)} sem juros</option>
            <option>6x de R${(precoTotal / 6).toFixed(2)} sem juros</option>
            <option>7x de R${(precoTotal / 7).toFixed(2)} sem juros</option>
            <option>8x de R${(precoTotal / 8).toFixed(2)} sem juros</option>
            <option>9x de R${(precoTotal / 9).toFixed(2)} sem juros</option>
            <option>10x de R${(precoTotal / 10).toFixed(2)} sem juros</option>
            <option>11x de R${(precoTotal*1.04 / 11).toFixed(2)} com juros</option>
            <option>12x de R${(precoTotal*1.04 / 12).toFixed(2)} com juros</option>
          </select>
        </div>
        <div className='opcao'>
          <input type='radio' name='pagamento' onClick={() => {setFormaPagamento("Cartão de Débito")}}/><FaRegCreditCard/><p>Cartão de Débito</p>
        </div>
        <div className='opcao'>
          <input type='radio' name='pagamento' onClick={() => {setFormaPagamento("Boleto")}}/><RiBillLine/><p>Boleto</p>
        </div>
        <div className='opcao'>
          <input type='radio' name='pagamento' onClick={() => {setFormaPagamento("Transferência Bancária")}}/><BsBank/><p>Transferência Bancária</p>
        </div>

      </form>
    </AbaPagamentoEstilizada>
  )
}
