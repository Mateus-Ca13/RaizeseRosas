import React from 'react'
import styled from 'styled-components'

const TituloEstilizado = styled.div`
text-align: center;
margin: 1em 0;

h1 {
    display: inline;
    font-size: 30px;
    font-weight: 700;
    color: var(--preto);
    padding: 0.1em 1em;
border-bottom: 2px solid var(--verde-principal);

}


`

export default function Titulo({ children }) {
  return (
    <TituloEstilizado>
        <h1>{children}</h1>
    </TituloEstilizado>

  )
}
