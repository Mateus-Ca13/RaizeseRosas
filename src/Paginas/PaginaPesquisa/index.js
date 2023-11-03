import React from 'react'
import { useParams } from 'react-router-dom'

export default function PaginaPesquisa() {
    const parametros = useParams();
  return (
    <>
    <h2>Resultados para: {parametros.busca}</h2>
    
    </>
    
  )
}
