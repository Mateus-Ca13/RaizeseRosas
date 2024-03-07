import React from 'react'
import styled from 'styled-components'
import MenuLink from '../MenuLink'
import logo from './logo.png'
import BarraPesquisa from '../BarraPesquisa'
import IconeCarrinho from '../IconeCarrinho'
import MenuHamburguer from '../MenuHamburguer'


const HeaderEstilizado = styled.header`
position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 2;
display: flex;
justify-content: space-between;
padding: 1em 3em;
align-items: center;
background-color: var(--branco);
box-shadow: 1px 1px 10px var(--cinza);

.logo {
    width: 200px;
    height: 18%;
}

nav {
    display: flex;
    gap: 0 1em ;
}
.links {
    display: flex;
}

@media screen and (max-width: 1180px){
    padding: 1em 1.5em;
    gap: 1em;
    margin: 0 0 2em 0;

    .logo {
        width: 150px;
    }

    .desktopView{
        display: none
    }

    .pesquisaMobile {
        display: block;
        position: absolute;
        bottom: -75%;
        left: 50%;
         transform: translate(-50%, -50%);
    }
}
`

export default function Header() {
    return (
        <HeaderEstilizado>
            <MenuHamburguer />
            <MenuLink to={"/"}>
                <img className='logo' src={logo} alt='Logotipo da Raizes & Rosas'></img>
            </MenuLink>
            <nav>
                <div className='links desktopView'>
                    <MenuLink estilizado to={"/"}>Destaques</MenuLink>
                    <MenuLink estilizado to={"/unidades"}>Unidades</MenuLink>
                    <MenuLink estilizado to={"/contato"}>Contato</MenuLink>
                </div>
                <div className='pesquisaMobile'>
                <BarraPesquisa />
                </div>
                <IconeCarrinho />
            </nav>
        </HeaderEstilizado>
    )
}
