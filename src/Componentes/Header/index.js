import React from 'react'
import styled from 'styled-components'
import MenuLink from '../MenuLink'
import logo from './logo.png'
import BarraPesquisa from '../BarraPesquisa'
import IconeCarrinho from '../IconeCarrinho'
import { Link } from 'react-router-dom'


const HeaderEstilizado = styled.header`
position: sticky;
z-index: 2;
display: flex;
justify-content: space-between;
padding: 1em 3em;
align-items: center;
box-shadow: 1px 1px 10px var(--cinza);

.logo {
    width: 200px;
    height: 18%;
}

nav {
    display: flex;
    gap: 0 1em ;
}
`

export default function Header() {
    return (
        <HeaderEstilizado>
            <Link to={"/"}>
                <img className='logo' src={logo} alt='Logotipo da Raizes & Rosas'></img>
            </Link>
            <nav>
                <MenuLink estilizado to={"/"}>Categorias</MenuLink>
                <MenuLink estilizado to={"/unidades"}>Unidades</MenuLink>
                <MenuLink estilizado to={"/contato"}>Contato</MenuLink>
                <BarraPesquisa />
                <IconeCarrinho />
            </nav>
        </HeaderEstilizado>
    )
}
