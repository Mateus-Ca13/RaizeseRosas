import React, { useState } from 'react'
import styled from 'styled-components'
import BotaoPesquisar from './BotaoPesquisar'
import { useNavigate } from 'react-router-dom';

const BarraPesquisaEstilizada = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;

    input {
    font-size: 18px;
    background-color: var(--verde-principal);
    border: none;
    padding: 0 0.5em;
    border-radius: 5px 0 0 5px;
    width: 300px;
    font-family: var(--fonte);
    transition: 0.3s all;

    &::placeholder {
            color: var(--branco);
        }

    &:focus {
        outline: none;
    }
}

@media screen and (max-width: 1180px){
    border: 3px solid var(--branco);
    border-radius: 10px;
    input {
        width: 70vw;  
    }
    }
`


export default function BarraPesquisa({ viewType }) {
    const [pesquisaFeita, setPesquisaFeita] = useState("");
    const link = useNavigate();

  return (
    <BarraPesquisaEstilizada >
        <input
        onKeyDown={(e) => {
            if(e.key == 'Enter') {
        link(pesquisaFeita.length > 0 ? 
            pesquisaFeita.includes(".") ? 
        '/pesquisar/..' :  `/pesquisar/${pesquisaFeita}`  : '/pesquisar/..')
    }
}}
        onChange={(e) => {setPesquisaFeita(e.target.value)}} 
        placeholder='O que você está buscando?'></input>
        <BotaoPesquisar infoPesquisada={pesquisaFeita}></BotaoPesquisar>
    </BarraPesquisaEstilizada>
  )
}
