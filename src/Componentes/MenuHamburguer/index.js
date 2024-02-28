import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMenuOutline } from "react-icons/io5";
import NavegacaoMenu from './NavegacaoMenu';

const MenuEstilizado = styled.section`
display: none;

.menuIcon {
  font-size: 1.5em;
}


@media screen  and (max-width: 1180px){
display: block;
}
`

export default function MenuHamburguer() {
  const [menuAberto, setMenuAberto] = useState(false)
    
  function alterarMenu () {
    menuAberto == true? setMenuAberto(false) : setMenuAberto(true)
    
  }
  
  return (
    <MenuEstilizado>
        <IoMenuOutline onClick={() => alterarMenu(menuAberto)} className='menuIcon'/>
        {menuAberto && (<NavegacaoMenu fecharMenu={alterarMenu}/>)}
    </MenuEstilizado>
  )
}
