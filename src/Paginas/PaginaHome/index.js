import React from 'react'
import Banner from '../../Componentes/Banner'
import Titulo from '../../Componentes/Titulo'
import GridDeCards from '../../Componentes/GridDeCards'
import produtos from '../../json/produtos.json'
import styled from 'styled-components'

const PaginaHomeEstilizada = styled.main`

.grid {
  margin: 0 3em;
}
`

export default function PaginaHome() {
  return (
    <PaginaHomeEstilizada>
      <Banner />
      <Titulo>Produtos em Destaque</Titulo>
      <div className='grid'>
        <GridDeCards lista={produtos}/>
      </div>

    </PaginaHomeEstilizada>

  )
}
