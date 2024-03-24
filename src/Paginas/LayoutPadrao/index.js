import React from 'react'
import Header from '../../Componentes/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Rodape from '../../Componentes/Rodape'

const LayoutEstilizado = styled.section`
display: flex;
position: relative;
flex-direction: column;
justify-content: space-between;

.espaçamento {
  margin: 2em;
}
`

export default function LayoutPadrao() {
  return (
    <LayoutEstilizado>
    <Header/>
    <div className='espaçamento'/>
    <Outlet/>
    <Rodape/>
    </LayoutEstilizado>
    
  )
}
