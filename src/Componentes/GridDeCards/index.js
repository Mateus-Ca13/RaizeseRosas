import React from 'react'
import styled from 'styled-components'
import CardProduto from '../CardProduto'

const GridEstilizado = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
margin: 2em 4em;
gap: 1em;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr
}

`

export default function GridDeCards({lista, qtdDeCards}) {

    lista = qtdDeCards ? lista.slice(qtdDeCards) : lista
    
  return (
    <GridEstilizado>
        {lista.map((produto) => {return <CardProduto produto={produto} key={produto.id} />})}
    </GridEstilizado>
  )
}
