import React from 'react'
import styled from 'styled-components'
import CardComentario from '../CardComentario'

const ComentariosAbaEstilizado = styled.section`
padding: 0.5em;
box-shadow: 1px 1px 10px 5px var(--cinza);
border-radius: 15px;

`

export default function ComentariosAba({ comentarios }) {
  return (
    <ComentariosAbaEstilizado>
        {comentarios.map((comentario) => {return <CardComentario key={comentarios.length += 1} comentario={comentario}/>})}
    </ComentariosAbaEstilizado>
  )
}
