import React from 'react'
import styled from 'styled-components'
import imagem from './banner.png'

const BannerEstilizado = styled.img`
width: 100%;
`

export default function Banner() {
  return (
    <BannerEstilizado src={imagem}/>
  )
}
