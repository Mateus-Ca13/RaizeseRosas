import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCarrinhoContext } from '../../Contextos/carrinho'

const BotaoCarrinhoEstilizado = styled.div`

  .padrao {
  color: var(--branco);
  background-color: var(--verde-principal);
  border: none;
  padding: 0.3em 1em;
  font-size: 22px;
  border-radius: 10px;
  font-weight: 700;
  height: 70px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  transition: 0.2s all;

  &:hover {
    background-color: var(--verde-secundario);
    transition: 0.2s all;
  }
}
 

  .ativado {
  color: var(--preto);
  background-color: var(--cinza);
  border: none;
  padding: 0.3em 1em;
  font-size: 22px;
  border-radius: 10px;
  font-weight: 700;
  width: 100%;
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2em;
  transition: 0.2s all;
  }

  @media screen and (max-width: 580px){

    .padrao, .ativado {
      font-size: 14px;
    }

    .icon {
      font-size: 18px;
    }
  }
   
`

export default function BotaoAdicionarAoCarrinho({ produto }) {
  const { adicionarProdutoNoCarrinho } = useCarrinhoContext();
  const [estadoDeFrase, setEstadoDeFrase] = useState("Adicionar ao Carrinho")
  const [estadoAparencia, setEstadoAparencia] = useState("padrao")

  function delayAdicao(e) {
    e.target.disabled = true;
    setEstadoDeFrase("Adicionado ao Carrinho!")
    setEstadoAparencia('ativado')
    setTimeout(() => {
      setEstadoDeFrase("Adicionar ao Carrinho")
      setEstadoAparencia('padrao')
      e.target.disabled = false;
    }, 1500);
  }

  return (
    <BotaoCarrinhoEstilizado>
    <button
      className={estadoAparencia}
      onClick={(e) => {
        adicionarProdutoNoCarrinho({ produto, quantidade: 1 });
        delayAdicao(e)
      }}
    >
      {estadoDeFrase}
      <AiOutlineShoppingCart className='icon'/>
      </button>
    </BotaoCarrinhoEstilizado >
  )
}
