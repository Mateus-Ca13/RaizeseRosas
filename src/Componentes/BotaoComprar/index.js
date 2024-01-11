import React from 'react'
import styled from 'styled-components'

const BotaoEstilizado = styled.button`
font-size: 20px;
background-color: var(--branco);
color: var(--verde-principal);
border: none;
border-radius: 10px;
padding: 1em;
transition: 0.3s all;
cursor: pointer;
font-weight: 700;

&:hover {
    transition: 0.3s all;
    background-color: var(--verde-secundario);
color: var(--branco);
}

`

export default function BotaoComprar() {
    return (
        <BotaoEstilizado>
            Finalizar Compra
        </BotaoEstilizado>

    )
}
