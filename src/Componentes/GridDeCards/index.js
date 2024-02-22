import React from 'react'
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

`

export default function GridDeCards({lista, qtdDeCards, ItemParafiltro }) {

  ItemParafiltro ? console.log("tem filtro"): console.log("Nao tem filtro")

  // Filtro por categoria de item
    const listaFiltrada = ItemParafiltro ? 
    lista.filter((produto) => {
      for (let index = 0; index < ItemParafiltro.categorias.length; index++) {
        const categoria = ItemParafiltro.categorias[index];
        if(produto.categorias.includes(categoria))
        {if (ItemParafiltro.id != produto.id)
          {return produto}}
      }
      }).concat(lista.sort(() => Math.random() - 0.5)).reverse() : 
    lista

    //Quantificação de itens da lista
    const ListaFinal = qtdDeCards ? listaFiltrada.slice(-(qtdDeCards)) : listaFiltrada;

  return (
    <GridEstilizado>
        {ListaFinal.reverse().map((produto) => {return <CardProduto produto={produto} key={produto.id} />})}
    </GridEstilizado>
  )
}
