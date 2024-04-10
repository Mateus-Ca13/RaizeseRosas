import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCarrinhoContext } from '../../Contextos/carrinho';

const CarrinhoEstilizado = styled.div`
    position: relative;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: var(--verde-principal);
    padding: 0.3em;
    border-radius: 100%;

        &:hover {
            .icone, span {
                color: var(--branco);
                transition: 0.3s all;
            }
            
        }

.icone, span {
    transition: 0.3s all;
}
    
.icone {
    font-size: 24px;
    color: var(--preto);
}

@media screen and (max-width: 580px){
    .icone {
        font-size: 20px;
    }
}

`
const IconeItensCarrinho = styled.span`
    font-size: 14px;
    position: absolute;
    color: var(--preto);
    background-color: var(--verde-secundario);
    bottom: -10px;
    right: -10px;
    padding: 0em 0.4em;
    border-radius: 100%;
    
`


export default function IconeCarrinho() {
    const {carrinho, adicionarProdutoNoCarrinho} = useCarrinhoContext();
    const numeroDeItens = carrinho.length;

    return (
        <Link to={"/carrinho"}>
            <CarrinhoEstilizado>
                <AiOutlineShoppingCart className='icone'></AiOutlineShoppingCart>
                <IconeItensCarrinho>{numeroDeItens}</IconeItensCarrinho>
            </CarrinhoEstilizado>
        </Link>
    )
}
