import React, { useState } from 'react'
import styled from 'styled-components'
import imagemLG from './banner-lg.png'
import imagemMD from './banner-md.png'

const BannerEstilizado = styled.img`
width: 100%;
@media screen and (max-width: 1180px){
  
}
`

export default function Banner() {
  const [tamanhoBanner, setTamanhoBanner] = useState(imagemLG)
    
    
  return (
    <BannerEstilizado on src={imagemLG}/>
  )
}
