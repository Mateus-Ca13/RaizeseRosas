import React from 'react'
import styled from 'styled-components'
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';

const CardComentarioEstilizado = styled.div`
padding: 0.8em;
border: 2px solid var(--cinza);
border-radius: 15px;
margin: 1em;

p{
    margin: 0;
    line-height: 1em;
}

.comentario {
        margin: 0.1em 0.7em;
    }

.usuario {
    display: flex;
    align-items: center;
    justify-content: start;

    .autor {
        font-weight: 700;
        text-transform: uppercase;
        margin: 0.1em 0;
    }

    .perfil {
        font-size: 36px;
        color: var(--verde-principal);
        margin: 0 0.2em;
    }

    .nota {
        display: flex;
        align-items: center;
        color: var(--amarelo)
    }
}
`

export default function CardComentario({comentario}) {
  return (
    <CardComentarioEstilizado>
        <div className='usuario'>
            <FaRegUserCircle className='perfil'/>
            <span>
                <p className='autor'>{comentario.nomeAutor}</p>
                <span className='nota'>
                    <p>{comentario.notaDada.toFixed(1)}</p> 
                    <p><AiFillStar/></p>
                </span>
            </span>
        </div>
        <div className='comentario'>
        {comentario.comentario}
        </div>
    </CardComentarioEstilizado>
  )
}
