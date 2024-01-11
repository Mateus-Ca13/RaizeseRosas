import React from 'react'
import Header from '../../Componentes/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Rodape from '../../Componentes/Rodape'

const LayoutEstilizado = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export default function LayoutPadrao() {
  return (
    <LayoutEstilizado>
    <Header/>
    <Outlet/>
    <Rodape/>
    </LayoutEstilizado>
    
  )
}
