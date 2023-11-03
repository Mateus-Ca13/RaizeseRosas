import React, { useState } from 'react'
import styled from 'styled-components'
import BotaoPesquisar from './BotaoPesquisar'

const BarraPesquisaEstilizada = styled.div`
    display: flex;
    justify-content: center;

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
`


export default function BarraPesquisa() {
    const [pesquisaFeita, setPesquisaFeita] = useState("");

  return (
    <BarraPesquisaEstilizada >
        <input onChange={(e) => {setPesquisaFeita(e.target.value)}} placeholder='O que você está buscando?'></input>
        <BotaoPesquisar infoPesquisada={pesquisaFeita}>Buscar</BotaoPesquisar>
    </BarraPesquisaEstilizada>
  )
}
