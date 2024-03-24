import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Titulo from '../../Componentes/Titulo';
import { RiToolsFill } from "react-icons/ri";
import GridPesquisaResultado from '../../Componentes/GridPesquisaResultado';


const PaginaPesquisaEstilizada = styled.section`
  .pesquisa{
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 3em;
    border-radius: 10px;
    background-color: var(--verde-secundario);

  }


  @media screen and (max-width: 1180px){
    margin: 1.5em 0;

  }

  @media screen and (max-width: 580px){
    .pesquisa {
      font-size: 16px;
    }
  }
`
export default function PaginaPesquisa() {
    const parametros = useParams();
  return (
    <PaginaPesquisaEstilizada>
    <Titulo>Resultados para: </Titulo>
    <h2 className='pesquisa'>{parametros.busca}</h2>
    <GridPesquisaResultado pesquisa={parametros.busca}/>
    </PaginaPesquisaEstilizada>
    
  )
}
