import React from 'react'
import styled from 'styled-components'

const AbaPrecoEstilizada = styled.section`
  box-shadow: 1px 1px 10px 1px var(--cinza);
display: flex;
flex-direction: column;
background-color: var(--verde-secundario);
text-align: center;
padding: 0.5em 1em;
border-radius: 10px;


.sticky {
  position: sticky;
  top: 6em;
}

h3 {
  border-bottom: 5px solid var(--verde-principal);
}

.subtotal {
  background-color: var(--verde-principal);
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 10px;

  p {
    margin: 0;
    font-weight: 700;
    color: var(--branco);
  }

  .titulo {
    color: var(--verde-secundario);
  }
}

@media screen and (max-width: 780px){

}
`

export default function AbaPrecoFinal({ precoPedido, precoEntrega, desconto }) {
  return (
    <AbaPrecoEstilizada>
      <div className='sticky'>
        <h3>Valor do pedido</h3>
        <div className='subtotal'>
          <p className='titulo'>Valor do carrinho</p>
          <p>R${precoPedido.toFixed(2)}</p>
        </div>
        <div className='subtotal'>
          <p className='titulo'>Taxa de Entrega</p>
          <p>R${precoEntrega.toFixed(2)}</p>
        </div>
        <div className='subtotal'>
          <p className='titulo'>Desconto</p>
          <p>R${desconto.toFixed(2)}</p>
        </div>
        <h3>Total da compra</h3>
        <div className='subtotal'>
          <p>R${(precoEntrega + precoPedido - desconto).toFixed(2)}</p>
        </div>
      </div>
    </AbaPrecoEstilizada>
  )
}
