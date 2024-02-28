import React from 'react'
import styled from 'styled-components'
import Titulo from '../../Componentes/Titulo'
import Formulario from '../../Componentes/Formulario'
import AbaContato from './AbaContato'

const PaginaContatoEstilizada = styled.main`
margin: 0 3em 3em 3em;


.center {
    text-align: center;
    font-size: 18px;
    margin: 2em 5em;
}

@media screen and (max-width: 580px) {
  margin: 2.5em 1em;

  .center{
    margin: 1em;
    font-size: 90%;
  }
}
`

export default function PaginaContato() {
  return (
    <PaginaContatoEstilizada>
        <Titulo>Aba de Contato</Titulo>
        <p className='center'>Entre em contato conosco para qualquer dúvida, sugestão ou assistência. Utilize a aba de contato para nos enviar sua mensagem ou envie-a diretamente pelo formulário abaixo.</p>
        <AbaContato/>
        
        <Formulario/>
    </PaginaContatoEstilizada>
  )
}
