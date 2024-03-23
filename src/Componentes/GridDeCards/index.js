import React, { useState } from 'react'
import styled from 'styled-components'
import CardProduto from '../CardProduto'

const GridEstilizado = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gap: 1em;
margin: 2em;


@media screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 710px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 580px){
  margin: 2em 1em;
}
`

export default function GridDeCards({lista, qtdDeCards, itemParafiltro }) {
  
  
  itemParafiltro ? console.log("tem filtro"): console.log("Nao tem filtro");

  // Filtro por categoria de item
    const listaFiltrada = itemParafiltro ? 
    lista.filter((produto) => {
      for (let index = 0; index < itemParafiltro.categorias.length; index++) {
        const categoria = itemParafiltro.categorias[index];
        if(produto.categorias.includes(categoria))
        {if (itemParafiltro.id != produto.id)
          {return produto}}
      }
      }).concat(lista).reverse() : 
      lista;

    //Quantificação de itens da lista
    const listaFinal = qtdDeCards ? listaFiltrada.slice(-(qtdDeCards)).reverse() : listaFiltrada;
  return (
    <GridEstilizado>
        {listaFinal.map((produto) => {return <CardProduto produto={produto} key={produto.id} />})}
    </GridEstilizado>
  )
}
