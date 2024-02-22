import React from 'react'
import styled from 'styled-components'
import MenuLink from '../../MenuLink'

const NavegacaoEstilizada = styled.nav`
display: flex;
flex-direction: column;
top: 67px;
position: absolute;
z-index: 2;
height: 100vh;
background-color: var(--branco);
left: 0;
padding: 1.5em 3em 1.5em 1.5em;
box-shadow: 1px 1px 10px var(--cinza);
`

const FundoMenu = styled.div`
position: absolute;
top: 67px;
left: 0;
z-index: 1;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.3);
`

export default function NavegacaoMenu({ menu, fecharMenu }) {

  return (
    <>
    <NavegacaoEstilizada onClick={() => fecharMenu(menu)}>
        <MenuLink estilizado to={"/categorias"}>Categorias</MenuLink>
        <MenuLink estilizado to={"/unidades"}>Unidades</MenuLink>
        <MenuLink estilizado to={"/contato"}>Contato</MenuLink>
    </NavegacaoEstilizada>
    <FundoMenu onClick={() => fecharMenu(menu)}/>
    </>
  )
}
