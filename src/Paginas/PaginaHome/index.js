import React from 'react'
import Banner from '../../Componentes/Banner'
import Titulo from '../../Componentes/Titulo'
import GridDeCards from '../../Componentes/GridDeCards'
import produtos from '../../json/produtos.json'

export default function PaginaHome() {
  return (
    <>
     <Banner/>
      <Titulo>Produtos em Destaque</Titulo>
      <GridDeCards lista={produtos}/>
    </>
   
  )
}
