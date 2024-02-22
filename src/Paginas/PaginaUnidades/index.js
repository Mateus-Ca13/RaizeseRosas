import React from 'react'
import styled from 'styled-components';
import Titulo from '../../Componentes/Titulo';
import CardUnidade from './CardUnidade';

const PaginaUnidadesEstilizada = styled.main`


.cards {
  margin: 3em;
  gap: 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
}

@media screen and (max-width: 1180px) {
  .cards{
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

`

export default function PaginaUnidades() {


  return (
    <PaginaUnidadesEstilizada>
      <Titulo>Nossas unidades</Titulo>
      <div className='cards'>
        <CardUnidade endereco={' Rua das Flores, 123 - Centro, Florianópolis'} imagem={'/assets/unidades/und1.png'} numero={'(48) 9999-1111'} />
        <CardUnidade endereco={'Avenida do Sol, 456 - Lagoa da Conceição, Florianópolis'} imagem={'/assets/unidades/und2.png'} numero={'(48) 9999-2222'} />
        <CardUnidade endereco={'Travessa da Lua, 789 - Campeche, Florianópolis'} imagem={'/assets/unidades/und3.png'} numero={'(48) 9999-3333'} />
        <CardUnidade endereco={'Rua da Praia, 101 - Ingleses, Florianópolis'} imagem={'/assets/unidades/und4.png'} numero={'(48) 9999-4444'} />
     
      </div>
    </PaginaUnidadesEstilizada>
  )
}
