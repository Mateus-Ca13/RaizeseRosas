import React from 'react'
import { styled } from 'styled-components'
import ExibicaoPreco from '../ExibicaoPreco'
import ExibidorNotaProduto from '../ExibidorNotaProduto'

const ExibicaoProdutoEstilizado = styled.section`
display: flex;

`

export default function ExibicaoProduto({ produtoExibido }) {

  return (
    <ExibicaoProdutoEstilizado>
      <img src={`../${produtoExibido.imagem}`} alt={produtoExibido.nome}></img>
      <div>
        <h1>{produtoExibido.nome}</h1>
        <ExibidorNotaProduto nota={produtoExibido.nota} quantidadeAvaliacoes={produtoExibido.quantidadeAvaliacoes}/>
        <ExibicaoPreco preco={produtoExibido.preco} />
      </div>


    </ExibicaoProdutoEstilizado>
  )
}
