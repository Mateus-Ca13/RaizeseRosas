import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Titulo from '../../Componentes/Titulo';

const PaginaPesquisaEstilizada = styled.section`
  h3 {
    text-align: center;
    margin: 0;
  }
  @media screen and (max-width: 580px){
    margin: 2.5em 1em 
  }
`
export default function PaginaPesquisa() {
    const parametros = useParams();
  return (
    <PaginaPesquisaEstilizada>
    <Titulo>Resultados para: </Titulo>
    <h3>{parametros.busca}</h3>
    </PaginaPesquisaEstilizada>
    
  )
}
