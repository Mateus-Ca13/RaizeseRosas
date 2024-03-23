import React, { useState } from 'react'
import styled from 'styled-components'
import imagemLG from './banner-lg.png'
import imagemMD from './banner-md.png'
import imagemSM from "./banner-sm.png"

const BannerEstilizado = styled.img`
width: 100%;

`

export default function Banner( ) {  
    
  const larguraTela = window.innerWidth;
  console.log(larguraTela)
  return (
    <BannerEstilizado src={larguraTela >= 768 ?imagemLG : larguraTela >= 490 ? imagemMD : imagemSM}/>
  )
}
