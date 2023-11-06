import React from 'react'
import { styled } from 'styled-components'

const ExibicaoPrecoEstilizado = styled.section`

`

export default function ExibicaoPreco({ preco }) {
  return (
    <ExibicaoPrecoEstilizado>
        <h2>PREÇO: {preco}</h2>
    </ExibicaoPrecoEstilizado>
  )
}
