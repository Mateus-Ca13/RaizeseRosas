import React from 'react'
import { styled } from 'styled-components'

const ExibicaoPrecoEstilizado = styled.section`
display: flex;
align-items: center;
margin: 1em 0;
gap: 0.5em;

.preco {
  display: flex;
  align-items: center;
  color: var(--branco);
  background-color: var(--verde-principal);
  padding: 0 1em;
  border-radius: 5px;
  gap: 0.3em;

  h2 {
    margin: 0;
    font-size: 30px;
  }

 
}

p {
    margin: 0;
  }

.destaque {
  color: var(--verde-principal);
}

@media screen  and (max-width: 580px){
      flex-direction: column;
      align-items: start;
      
      .preco h2 {
        font-size:20px;
      }
      p {
        font-size: 12px;
      }
}
`

export default function ExibicaoPreco({ preco }) {
  return (
    <ExibicaoPrecoEstilizado>
      <div className='preco'>
      <h2>R${preco}</h2>
      <p>à vista</p>
      </div>
        
        <p>Ou parcele em <span className='destaque'>até 10x R${(preco / 10).toFixed(2)} sem juros</span></p>
    </ExibicaoPrecoEstilizado>
  )
}
