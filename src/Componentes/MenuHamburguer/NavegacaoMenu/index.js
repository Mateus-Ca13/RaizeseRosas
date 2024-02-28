import React from 'react'
import styled from 'styled-components'
import MenuLink from '../../MenuLink'

const NavegacaoEstilizada = styled.nav`
top: 66px;
position: absolute;
z-index: 2;
height: 100vh;
background-color: var(--branco);
left: 0;
padding: 1.5em 3em 1.5em 1.5em;


.lista {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
`

const FundoMenu = styled.div`
position: absolute;
top: 66px;
left: 0;
z-index: 1;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.3);
`

export default function NavegacaoMenu({ fecharMenu }) {

  return (
    <>
      <NavegacaoEstilizada onClick={() => fecharMenu()}>
        <div className='lista'>
          <MenuLink estilizado to={"/categorias"}>Categorias</MenuLink>
          <MenuLink estilizado to={"/unidades"}>Unidades</MenuLink>
          <MenuLink estilizado to={"/contato"}>Contato</MenuLink>
        </div>
      </NavegacaoEstilizada>
      <FundoMenu onClick={() => fecharMenu()} />
    </>
  )
}
