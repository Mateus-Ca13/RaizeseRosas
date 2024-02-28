import React from 'react'
import styled from 'styled-components'

const InputEstilizado = styled.div`
 font-size: 22px;
 display: flex;
 flex-direction: column;

label {
  margin: 0.3em 0;
  padding: 0 0.5em;
}

input {
  color: var(--branco);
  width: auto;
  padding: 0.3em 1em;
  font-size: 20px;
  background-color: var(--verde-principal);
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: var(--branco);
  }

  
}

.submit {
    margin: 0.5em 0 0;
    width: 200px;
    padding: 0.4em;
    font-weight: 700;
    color: var(--preto);
    background-color: var(--verde-secundario);
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
    color: var(--branco);
    background-color: var(--cinza);
    transition: 0.3s all;
    
    }
  }

  @media screen and (max-width: 580px){
    label, input {
      font-size: 70%;
    }
  }
`

export default function Input({ tipo, placeholder, children}) {
  return (
    <InputEstilizado>
    <label>{children}</label>
    <input className={tipo} type={tipo} placeholder={placeholder}></input>
    </InputEstilizado>

  )
}
