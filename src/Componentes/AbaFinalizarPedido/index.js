import React, { useState } from 'react'
import styled from 'styled-components'
import AbaPrecoFinal from '../AbaPrecoFinal'
import AbaEndereco from '../AbaEndereco'
import AbaPagamento from '../AbaPagamento'
import AbaDesconto from '../AbaDesconto'
import AbaConfirmarCompra from '../AbaConfirmarCompra'

const AbaEstilizada = styled.section`
margin: 2em 0;
display: flex;
justify-content: space-between;

h2 {
  margin: 0 0.5em;
  color: var(--verde-principal);
}

@media screen and (max-width: 780px){
  flex-direction: column;

  .abas {
    display: flex;
    flex-direction: column;
  }
}
`

export default function AbaFinalizarPedido({ precoPedido }) {
  const [taxaEntrega, setTaxaEntrega] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState(null)
  const [endereco, setEndereco] = useState({
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: ""
  })

  return (
    <AbaEstilizada>
      <div className='abas'>
        <AbaEndereco taxaEntrega={taxaEntrega} setTaxaEntrega={setTaxaEntrega} setDesconto={setDesconto} setEndereco={setEndereco} endereco={endereco}/>
        {taxaEntrega > 0 ? <AbaPagamento precoTotal={taxaEntrega + precoPedido + desconto} setFormaPagamento={setFormaPagamento}/>: ""}
        {taxaEntrega > 0 ? <AbaDesconto desconto={desconto} setDesconto={setDesconto} frete={taxaEntrega} precoPedido={precoPedido}/> : ""}
        {formaPagamento ? <AbaConfirmarCompra precoTotal={taxaEntrega + precoPedido + desconto} formaPagamento={formaPagamento} endereco={endereco}/> : ""}
      </div>
      <AbaPrecoFinal precoPedido={precoPedido} precoEntrega={taxaEntrega} desconto={desconto} />
    </AbaEstilizada>
  )
}
