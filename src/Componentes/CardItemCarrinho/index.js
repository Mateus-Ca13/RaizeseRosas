import React from 'react'
import styled from 'styled-components'
import MenuLink from '../MenuLink'
import ContadorProduto from '../ContadorProduto'

const CardItemCarrinhoEstilizado = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid var(--verde-secundario);
border-radius: 15px;
width: auto;

h4, h3 {
    margin: 0;
}

h4 {
    color: var(--verde-principal);

}

img {
    max-width: 180px;
    width: 20%;
    border-radius: 15px;
}

.infoProduto {
    align-items: start;
    display: flex;
    gap: 1em;

    div {
        margin-top: 1em;
    }
}
`

export default function CardItemCarrinho({ itemCarrinho }) {
    return (
        <CardItemCarrinhoEstilizado>
            <MenuLink to={`/produtos/${itemCarrinho.produto.id}`}>
                <div className='infoProduto'>
                    <img src={itemCarrinho.produto.imagem}></img>
                    <div>
                        <h3>{itemCarrinho.produto.nome}</h3>
                        <h4 className='precoProduto'>R${itemCarrinho.produto.preco}</h4>
                    </div>
                </div>
            </MenuLink>
            <ContadorProduto produto={itemCarrinho} />
        </CardItemCarrinhoEstilizado>

    )
}
