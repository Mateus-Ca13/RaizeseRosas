import React, { useState } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const AbaPrecoEstilizada = styled.aside`
box-shadow: 1px 1px 10px 1px var(--cinza);
display: flex;
flex-direction: column;
background-color: var(--verde-secundario);
text-align: center;
padding: 1.5em;
border-radius: 10px;

h3 {
  border-bottom: 5px solid var(--verde-principal);
}

.subtotal {
  background-color: var(--verde-principal);
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: 10px;

  p {
    margin: 0;
    font-weight: 700;
    color: var(--branco);
  }

  .titulo {
    color: var(--verde-secundario);
  }
}
.abrirAba {
  display: none;
}

@media screen and (max-width: 780px){
position: absolute;
height: 100%;
top: 0;
right: 0;
background-color: transparent;
box-shadow: none;
padding: 0;

.abrirAba {
  
  display: flex;
  gap: 0.2em;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: -30px;
  background-color: var(--verde-secundario);
  padding: 0.6em;
  border-radius: 5px;
}
.desativado {
  transition: 0.3s all;
  position: fixed;
  right: -220px;
}
}

@media screen and (max-width: 680px){

  h3 {
    font-size: 16px;
  }
  .subtotal p {
    font-size: 14px;
    font-weight: 500;
  }
  .desativado {
  position: fixed;
  right: -200px;
}
}
`

const AbaParaRolagem = styled.section`
transition: 0.3s all;
  box-shadow: 1px 1px 10px 1px var(--cinza);
border-radius: 15px 0 0 15px;
  padding: 0.5em 1em;
  position: sticky;
  top: 7em;
  background-color: var(--verde-secundario);
`

export default function AbaPrecoFinal({ precoPedido, precoEntrega, desconto }) {
   const [menuAberto, setMenuAberto] = useState("desativado");

   function AtivarAba () {
    menuAberto == "" ? setMenuAberto("desativado") : setMenuAberto("")
   }

  return (
    <AbaPrecoEstilizada>
      <AbaParaRolagem className={menuAberto}>
      <div className='abaPreco'>
        <h3>Valor do pedido</h3>
        <div className='subtotal'>
          <p className='titulo'>Valor do carrinho</p>
          <p>R${precoPedido.toFixed(2)}</p>
        </div>
        <div className='subtotal'>
          <p className='titulo'>Taxa de Entrega</p>
          <p>R${precoEntrega.toFixed(2)}</p>
        </div>
        <div className='subtotal'>
          <p className='titulo'>Desconto</p>
          <p>R${desconto.toFixed(2)}</p>
        </div>
        <h3>Total da compra</h3>
        <div className='subtotal'>
          <p>R${(precoEntrega + precoPedido - desconto).toFixed(2)}</p>
        </div>

        <span className='abrirAba' onClick={() => AtivarAba()}>
          <FaShoppingCart/>
          {menuAberto == 'desativado' ? <FaArrowLeft/> : <FaArrowRight/>}
        </span>
      </div>
      </AbaParaRolagem>
    </AbaPrecoEstilizada>
  )
}
