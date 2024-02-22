import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { styled } from 'styled-components';

const ExibidorNotaEstilizado = styled.div`
display: flex;
align-items: center;

p {
    margin: 0 0.2em;
}


.estrela {
    font-size: 18px;
}

.cheia, .nota {
    color: var(--amarelo);
}

.nota {
    display: flex;
    align-items: center;
}

.vazia {
    color: var(--cinza);
}

@media screen and (max-width: 580px){
    
display: block;
}
`

export default function ExibidorNotaProduto({ nota, quantidadeAvaliacoes }) {
    const qtdDeEstrelas = Math.round(nota)
    var estrelas = [];

    for (let index = 0; index < 5; index++) {
        qtdDeEstrelas > index ? estrelas.push(true) : estrelas.push(false)
    }

    return (
        <ExibidorNotaEstilizado>
            <p className='nota'>{nota}
            
                {estrelas.map((resposta) => resposta === true ? <AiFillStar key={estrelas.length +=1} className='cheia estrela' /> : <AiFillStar className='vazia estrela' />)}</p>
            
            <p>({quantidadeAvaliacoes} Avaliações)</p>

        </ExibidorNotaEstilizado>
    )
}
