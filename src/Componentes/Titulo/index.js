import React from 'react'
import styled from 'styled-components'

const TituloEstilizado = styled.div`
display: flex;
justify-content: center;
text-align: center;


h1 {
    margin: 0.5em;;
    font-size: 30px;
    font-weight: 700;
    color: var(--preto);
    padding: 0.1em 1em;
border-bottom: 2px solid var(--verde-principal);

}

@media screen  and (max-width: 500px){
  h1 {
    font-size: 20px;
  }
}

`

export default function Titulo({ children }) {
  return (
    <TituloEstilizado>
        <h1>{children}</h1>
    </TituloEstilizado>

  )
}
