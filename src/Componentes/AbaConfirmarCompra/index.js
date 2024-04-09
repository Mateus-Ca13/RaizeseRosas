import React from 'react'
import styled from 'styled-components'
import { useCarrinhoContext } from '../../Contextos/carrinho'
import ItemListaPedido from '../ItemListaPedido';
import BotaoConfirmarPedido from '../BotaoConfimarPedido';

const AbaConfirmarCompraEstilizada = styled.section`

h3 {
  margin: 0;
  
}
.tabela {
  box-shadow: 1px 1px 10px 1px var(--cinza);
  border-radius: 10px;
  padding: 1em;
  margin: 1em;
}

.coluna {
display: flex;
flex-direction: column;
}

@media screen and (max-width: 1280px) {
  max-width: 90%
}

@media screen and (max-width: 780px){
    max-width: 100%;

}
`

export default function AbaConfirmarCompra({ precoTotal, formaPagamento, endereco }) {
  const { carrinho } = useCarrinhoContext();

  return (
    <AbaConfirmarCompraEstilizada>
      <h2>Confirmar Pedido</h2>


      <div className='tabela'>
        <h3>Produtos no pedido</h3>
        {carrinho.map((itemCarrinho) => <ItemListaPedido key={itemCarrinho.produto.id} itemCarrinho={itemCarrinho}></ItemListaPedido>)}
      </div>
      <div className='tabela coluna'>
      <h3>Endereço de Entrega</h3>
      <span>{endereco.endereco + ", N° " + endereco.numero}</span>
      <span> {endereco.complemento + ", " + endereco.cidade + " - " + endereco.estado}</span>
      </div>
      <div className='tabela coluna'>
        <h3>Valor Total e Forma de Pagamento</h3>
        <span>{formaPagamento}</span>
        <span>R${precoTotal.toFixed(2)}</span>
      </div>
      <BotaoConfirmarPedido/>

    </AbaConfirmarCompraEstilizada>
  )
}
