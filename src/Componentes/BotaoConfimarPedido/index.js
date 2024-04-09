import React from 'react'
import styled from 'styled-components'


const BotaoConfirmarPedidoEstilizado = styled.form`
display: flex;
justify-content: center;

input {
background-color: var(--verde-principal);
color: var(--branco);
font-family: var(--fonte);
font-size: 20px;
padding: 0.5em 4em;
border-radius: 10px;
border: none;
margin:  0.5em 1em;
width: 100%;
transition: 0.3s all;

&:hover {
  transition: 0.3s all;
  background-color: var(--verde-secundario)
}
}

`

export default function BotaoConfirmarPedido() {

  return (
    <BotaoConfirmarPedidoEstilizado>  
      <input type='submit' value={"Confirmar Pedido"}></input>
      </BotaoConfirmarPedidoEstilizado>
  )
}
