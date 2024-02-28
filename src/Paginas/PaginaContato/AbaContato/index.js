import React from 'react'
import styled from 'styled-components'
import { IoMdMail } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const AbaContatoEstilizada = styled.div`
    margin: 3em;
    display: flex;
    justify-content: center;
    gap: 1em;

.linhaAba {
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 0.3em;
    background-color: var(--verde-principal);
    color: var(--branco);
    border-radius: 10px;
    padding: 0 1em;
    height: 80px;
}
.linhaAba p {
    text-align: center;
    display: inline-block;
    
}

.icon {
    font-size: 20px;
}

@media screen and (max-width: 1180px){
    flex-direction: column;
}

@media screen and (max-width: 580px){
    margin: 1.5em 0;

    p {
        font-size: 80%;
        margin: 0;
    }

    .linhaAba {
        height: 60px;
    }
}
`

export default function AbaContato() {
  return (
    <AbaContatoEstilizada>
    <div className='linhaAba'>
    <IoMdMail className='icon'/>|
        <p>atendimento@raizeserosas.com</p>      
    </div>
    <div className='linhaAba'>
    <FaPhoneFlip className='icon'/>|
        <p>(48) 9999-0000</p>
    </div>
    <div className='linhaAba'>
        <FaLocationDot className='icon'/>|
        <p>Rua da Praia, 101 - Ingleses, Florianópolis</p>    
    </div>
    </AbaContatoEstilizada>
  )
}
