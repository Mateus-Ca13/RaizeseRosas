import React, { useState } from 'react'
import styled from 'styled-components'

const AbaDescontoEstilizada = styled.section`
margin: 1em 0;

.flex {
    display: flex;
    align-items: center;

    p {
        color: var(--verde-principal);
        margin: 0 1em;
    }
}

input {
    font-size: 16px;
    background-color: var(--verde-secundario);
    margin: 0.5em;
    border-radius: 10px;
    border: none;
    padding: 1em;
    font-family: var(--fonte)
}

button {
    font-size: 16px;
   font-size: 16px;
    color: var(--branco);
    background-color: var(--verde-principal);
    margin: 0.5em;
    border-radius: 10px;
    border: none;
    padding: 1em;
}

@media screen and (max-width: 580px) {  
    .flex {
        flex-direction: column;
        align-items: center;
        justify-content: center;    
    }
    input {
        width: 88%;
    }
    button {
        width: 100%;
    }
    
}
`

export default function AbaDesconto({ setDesconto, frete, precoPedido, desconto }) {
    const [codigoCupom, setCodigoCupom] = useState("");
    const cupons = [
        {
            codigoCupom: "5OFF",
            efeitoCupom: precoPedido / 20
        },{
            codigoCupom: "10OFF",
            efeitoCupom: precoPedido / 10
        },{
            codigoCupom: "15OFF",
            efeitoCupom: precoPedido / 6.5
        },{
            codigoCupom: "FRETEOFF",
            efeitoCupom: frete
        }]
    
    function atualizarCodigo (evento) {
        setCodigoCupom(evento.target.value)
    }

    function aplicarCupom (cupons) {
        let codigovalido = false;

        cupons.forEach((cupom) => {
            if(cupom.codigoCupom.toLowerCase() == codigoCupom.toLowerCase() ){
              setDesconto(cupom.efeitoCupom) 
              codigovalido = true
            } else {
                
            }
        })
        codigovalido ? codigovalido = true : alert("Insira um cupom válido!")


       
        
    }

  return (

    <AbaDescontoEstilizada>
       <h2>Cupom de Desconto</h2>
       <div className='flex'>
        <input placeholder='Insira seu Cupom' onChange={(evento)=>{atualizarCodigo(evento)}}></input>
        <button onClick={()=>{aplicarCupom(cupons)}}>Aplicar</button>
        {desconto > 0 ? <p>Cupom aplicado com sucesso!</p> : <p></p>}
        </div>
        </AbaDescontoEstilizada>
  )
}
