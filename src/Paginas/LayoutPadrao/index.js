import React from 'react'
import Header from '../../Componentes/Header'
import { Outlet } from 'react-router-dom'

export default function LayoutPadrao() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
    
  )
}
