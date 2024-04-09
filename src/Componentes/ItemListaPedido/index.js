import React from 'react'
import styled from 'styled-components'

const ItemPedido = styled.span`
display: block;
 margin: 0.5em 0;
 border: 1px solid var(--cinza);
 padding: 0.2em 1em;;
 border-radius: 10px;

 span {
  font-weight: 700;
 }

 @media screen and (max-width: 680px){
  p {
    font-size: 14px;
  }
 }
`

export default function ItemListaPedido({itemCarrinho, key}) {
  return (
    <ItemPedido key={key}>
      <p><span>{itemCarrinho.quantidade + "x "}</span>{itemCarrinho.produto.nome}</p>
    </ItemPedido>
  )
}
