import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import MenuLink from '../MenuLink'

const RodapeEstilizado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 10px 5px var(--cinza);
padding: 2em 0 1em 0;

.logo {
    width: 200px;
    height: 18%;
}

.links {
  margin: 1em ;
  display: flex;
  gap: 0.2em;
}
`
export default function Rodape() {
  return (
    <RodapeEstilizado>
      <MenuLink to={'/'}>
        <img className='logo' src={logo} alt='Logotipo da Raizes & Rosas'></img>
      </MenuLink>
      <div className='links'>
        <MenuLink estilizado to={"/categorias"}>Categorias</MenuLink>
        <MenuLink estilizado to={"/unidades"}>Unidades</MenuLink>
        <MenuLink estilizado to={"/contato"}>Contato</MenuLink>
      </div>
        <p>© 2023 Raizes & Rosas - Todos os direitos reservados.</p>
    </RodapeEstilizado>
  )
}
