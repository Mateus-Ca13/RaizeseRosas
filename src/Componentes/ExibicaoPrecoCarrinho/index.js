import React, { useState } from 'react'
import styled from 'styled-components';
import BotaoComprar from '../BotaoComprar';
import { useCarrinhoContext } from '../../Contextos/carrinho';

const ExibidorPrecoCarrinhoEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  color: var(--verde-secundario);
  padding: 0.5em 1em;
  border-radius: 10px;
  background-color: var(--verde-principal);

  h3 {
    color: var(--branco);
    
  }

  h3, h4 {
    margin: 0.2em;
    font-size: 22px;
  }

  @media screen  and (max-width: 580px){
    flex-direction: column;
  }

`

export default function ExibicaoPrecoCarrinho() {
  const { carrinho } = useCarrinhoContext()
  let precoTotal = 0;

  for (let index = 0; index < carrinho.length; index++) {
    const itemCarrinho = carrinho[index];
    const valor = itemCarrinho.produto.preco;
    const quantidadeProduto = itemCarrinho.quantidade;
    precoTotal += (valor * quantidadeProduto);
  }
  return (
    <ExibidorPrecoCarrinhoEstilizado>
      <div>
        <h4>Valor total de carrinho:</h4>
        <h3>R${precoTotal.toFixed(2)}</h3>
      </div>
      <BotaoComprar />
    </ExibidorPrecoCarrinhoEstilizado>
  )
}
