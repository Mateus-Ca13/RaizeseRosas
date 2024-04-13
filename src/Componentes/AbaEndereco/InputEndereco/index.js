import React from 'react'
import styled from 'styled-components'

const InputEnderecoEstilizado = styled.div`
width: 90%;
 font-size: 22px;
 display: flex;
 flex-direction: column;
 margin: 0.5em;

label {
  font-size: 18px;
  margin: 0.3em 0;
  padding: 0 0.5em;
}

input {
  color: var(--preto);
  width: auto;
  padding: 0.3em 1em;
  font-size: 18px;
  background-color: var(--verde-secundario);
  border: none;
  border-radius: 10px;
  font-family: var(--fonte);
}

@media screen and (max-width: 780px){
    width: 100%;
}
@media screen and (max-width: 680px){
    label, input {
        font-size: 14px;
    }
}

`

export default function InputEndereco({ id, children, detectarValorNoInput, filtro, setCep}) {

    function filtroDeTeclas(e) {
        const ultimaTecla = e.target.value.slice(-1);
    
        if (!isNaN(Number(ultimaTecla))) {
          if (e.target.value.length < 9) {
            setCep(e.target.value)
          }
          else {
            e.target.value = e.target.value.slice(0, -1);
          }
        }
        else {
          e.target.value = e.target.value.slice(0, -1);
        }
      }
  return (
    <InputEnderecoEstilizado>
    <label>{children}</label>
    <input id={id} onChange={(e)=>{
        console.log(filtro)
        if(filtro)        
        {filtroDeTeclas(e)}
        detectarValorNoInput(e);
        }}>
        </input>
    </InputEnderecoEstilizado>
  )
}
