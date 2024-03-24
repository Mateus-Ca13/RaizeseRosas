import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BotaoPesquisarEstilizado = styled.button`

    font-size: 24px;
    background-color: var(--verde-principal);
    border: none;
    border-radius: 0 5px 5px 0;
    transition: 0.3s all;
    cursor: pointer;

    &:hover {
        background-color: var(--verde-secundario);
        transition: 0.3s all;
        
    }
    
    a {
    color: var(--branco);
    display: flex;
    align-items: center;
}
`

export default function BotaoPesquisar({ infoPesquisada }) {

    

    return (

        <BotaoPesquisarEstilizado>
            <Link to={infoPesquisada.length > 0 ? 
                        infoPesquisada.includes(".") ? 
                        '/pesquisar/..' :  `/pesquisar/${infoPesquisada}` : '/pesquisar/..'}>
                <AiOutlineSearch />
            </Link>
        </BotaoPesquisarEstilizado>


    )
}
