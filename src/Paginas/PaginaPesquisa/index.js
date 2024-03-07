import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Titulo from '../../Componentes/Titulo';
import { RiToolsFill } from "react-icons/ri";

const PaginaPesquisaEstilizada = styled.section`
  h2, h3, p {
    text-align: center;
    margin: 0;
  }

  .aviso {
    gap: 0.5em;
    background-color: var(--cinza);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  padding: 1em;
  border-radius: 15px;

  .icon {
    font-size: 50px;
  }
  
  @media screen and (max-width: 580px){
    margin: 2.5em 1em 
  }

  
  }
`
export default function PaginaPesquisa() {
    const parametros = useParams();
  return (
    <PaginaPesquisaEstilizada>
    <Titulo>Resultados para: </Titulo>
    <h2>{parametros.busca}</h2>
    <div className='aviso'>
      <RiToolsFill className='icon'/>
      <h3>Esta página está em desenvolvimento!</h3>
      <p>Em futuras atulizações ela estará disponível.</p>
    </div>

    </PaginaPesquisaEstilizada>
    
  )
}
