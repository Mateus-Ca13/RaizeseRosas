import React, { useState } from 'react'
import styled from 'styled-components'
import Titulo from '../../Componentes/Titulo'
import { useCarrinhoContext } from '../../Contextos/carrinho';
import CardItemCarrinho from '../../Componentes/CardItemCarrinho';
import ExibicaoPrecoCarrinho from '../../Componentes/ExibicaoPrecoCarrinho';
import MenuLink from '../../Componentes/MenuLink';
import AbaFinalizarPedido from '../../Componentes/AbaFinalizarPedido';

const CarrinhoEstilizado = styled.section`

.exibicaoProdutos {
  display: flex;
  flex-direction: column;
  margin: 2em;
  padding: 1em;
  gap: 1em;
  box-shadow: 1px 1px 10px 5px var(--cinza);
  border-radius: 15px;

  .carrinhoVazio {
    padding: 2em 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;

    h1, p{
      margin: 0;
    }

    a{
      margin: 1em 0;
      font-size: 20px;
      padding: 0.2em 1em;
      color: var(--branco);
      background-color: var(--verde-principal);
      border-radius: 10px;

      &:hover {
        background-color: var(--verde-secundario);
      }
    }
  }
}

@media screen and (max-width: 1180px){
  margin-top: 1.5em;
  .exibicaoProdutos {
    margin: 1em;
  }
}
`

export default function PaginaCarrinho() {
  const { carrinho } = useCarrinhoContext();

  return (
    <CarrinhoEstilizado>
      <Titulo>Meu Carrinho</Titulo>
      <div className='exibicaoProdutos'>
        {carrinho.length > 0 ? ExibicaoPadrao(carrinho) : ExibicaoVazio()}
      </div>
    </CarrinhoEstilizado>
  )
}



// ================ DEFINIÇÃO DO ESTADO DO CARRINHO ========================

function ExibicaoPadrao(carrinho) {
  const [finalizarPedido, setFinalizarPedido] = useState(false)

  let precoPedido = 0;

  for (let index = 0; index < carrinho.length; index++) {
    const itemCarrinho = carrinho[index];
    const valor = itemCarrinho.produto.preco;
    const quantidadeProduto = itemCarrinho.quantidade;
    precoPedido += (valor * quantidadeProduto);
  }
 
  return (
    <>
      {
        carrinho.map((itemCarrinhho) => { return <CardItemCarrinho key={itemCarrinhho.produto.id} itemCarrinho={itemCarrinhho} /> })
      }
      <ExibicaoPrecoCarrinho precoTotal={precoPedido} finalizarPedido={finalizarPedido} setFinalizarPedido={setFinalizarPedido}/>
        {finalizarPedido ? <AbaFinalizarPedido precoPedido={precoPedido}/> : ""}
    </ >

  )
}


function ExibicaoVazio() {
  return (
    <div className='carrinhoVazio'>
      <h1>Seu carrinho está vazio!</h1>
      <p>Experimente adicionar algum produto ao seu carrinho e ele aparecerá aqui!</p>
      <MenuLink estilizado to={"/"}>Ver produtos</MenuLink>
    </div>
  )
}
