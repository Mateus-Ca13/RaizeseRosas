import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const FormularioEstilizado = styled.section`
  box-shadow: 1px 1px 10px 5px var(--cinza);
  border-radius: 15px;
  padding: 2em;
  
 h3 {
  font-weight: 500;
  margin: 0 0 1em 0;
  text-align: center;
 }

 @media screen and (max-width: 580px){
  
  h3 {
    font-size: 90%;
  }
 }
`

export default function Formulario() {
  return (
    <FormularioEstilizado>
      <h3>Digite seus dados e nos envie uma mensagem sobre o assunto que queira conversar</h3>
      <form>
        <Input tipo={'email'} placeholder={'seuemail@dominio.com'}>Email</Input>
        <Input tipo={'tel'} placeholder={'(xx) xxxx-xxxx'}>Número de contato</Input>
        <Input tipo={'text'} placeholder={'Digite uma breve mensagem sobre seu contato...'}>Mensagem</Input>
        <Input tipo={'submit'}></Input>
      </form>
    </FormularioEstilizado>
  )
}
