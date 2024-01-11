import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import MenuLink from '../MenuLink'

const CardProdutoEstilizado = styled.div`
box-shadow: 1px 1px 10px var(--cinza);
border-radius: 15px;
background-color: var(--branco);
padding: 0.2em;

img {
width: 100%;
border-radius: 15px 15px 0 0;
border-bottom: 4px solid var(--verde-principal)
}

.infoCard {
padding: 0.5em 1em ;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;

span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


h2 {
    margin-top: 0;
    font-size: 16px;
    max-height:3em;
    overflow: hidden;
}

h3 {
    font-size: 22px;
    color: var(--branco);
    background-color: var(--verde-principal);
    margin: 0;
    padding: 0 0.5em;
    border-radius: 10px;
}

h4 {
  font-size: 14px;
  margin: 0;
  display: flex;
  align-items: center;

  .iconeNota {
    margin-left: 1px;
    color: var(--amarelo);
  }
}
}

`
export default function CardProduto({ produto }) {
  return (
    <MenuLink to={`/produtos/${produto.id}`}>
      <CardProdutoEstilizado>
        <img src={produto.imagem} alt={produto.nome}></img>
        <div className='infoCard'>
          <h2>{produto.nome}</h2>
          <span>
            <h3>R${produto.preco}</h3>
            <h4>{produto.nota}<AiFillStar className='iconeNota' /></h4>
          </span>

        </div>
      </CardProdutoEstilizado>
    </MenuLink>
  )
}
