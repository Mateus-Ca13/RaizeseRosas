import React from 'react'
import styled from 'styled-components'

export default function CardUnidade({ imagem, endereco, numero }) {

    const CardEstilziado = styled.div`
        box-shadow: 1px 1px 10px 5px var(--cinza);
        border-radius: 15px;
        width: 20vw;
        text-align: center;

        .desc {
            margin: 1em;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        img {
        border-radius: 15px 15px 0 0;
        width: 100%;
        }

        h4 {
            color: var(--branco);
            background-color: var(--verde-principal);
            display: inline-block;
            padding: 0.2em 0.5em;
            border-radius: 15px;
        }

        h5 {
            background-color: var(--verde-secundario);
            display: inline-block;
            padding: 0.2em 0.5em;
            border-radius: 15px;
        }

        h3, h4, h5 {
            margin: 0.3em 0;
            display: block;
        }


    `

    return (
        <CardEstilziado>
            <img src={imagem} alt='Foto da Unidade R&R'></img>
            <div className='desc'>
                <h3>{endereco}</h3>
                <div>
                    <h4>{numero}</h4>
                    <h5>Atendimento das 8h00 às 19h00.</h5>
                </div>
            </div>
        </CardEstilziado>
    )
}
