import React, { useContext } from 'react'
import styled from 'styled-components';
import { useCarrinhoContext } from '../../Contextos/carrinho';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ContadorEstilizado = styled.div`
display: flex;
align-items: center;
margin: 0 2em;
gap: 1em;

button {
    display: flex;
    align-items: center;
    background-color: var(--verde-principal);
    border: none;
    padding: 1em;
    border-radius: 10px;
    transition: 0.4s all; 

    &:hover {
        transition: 0.4s all;
        background-color: var(--verde-secundario);
    }
}

`

export default function ContadorProduto({ produto }) {
    const { atualizarQuantidadeItemDoCarrinho } = useCarrinhoContext()


  return (
    <ContadorEstilizado>
        <button onClick={() => atualizarQuantidadeItemDoCarrinho(produto, -1)}><FaMinus/></button>
        <h3 className='qtd'>{produto.quantidade}</h3>
        <button onClick={() => atualizarQuantidadeItemDoCarrinho(produto, +1)}><FaPlus/></button>

    </ContadorEstilizado>
  )
}
