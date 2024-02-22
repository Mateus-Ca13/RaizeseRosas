import React from 'react'
import { styled } from 'styled-components'
import ExibicaoPreco from '../ExibicaoPreco'
import ExibidorNotaProduto from '../ExibidorNotaProduto'
import BotaoAdicionarAoCarrinho from '../BotaoAdicionarAoCarrinho'

const ExibicaoProdutoEstilizado = styled.section`
display: flex;
gap: 2em;
justify-content: start;

.card {
  box-shadow: 1px 1px 10px 5px var(--cinza);
  border-radius: 15px;
}

.cardInfo {
  padding:2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}
img {
  width: 480px;
  height: 480px
}

h1 {
  margin: 0;
}

@media screen and (max-width: 1100px){
  flex-direction: column;
  gap: 1em;

  img {
  width: 40%;
  height: 40%;
}
  .itemImg {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--cinza);
    border-radius: 15px;
}

}
@media screen and (max-width: 580px){

img {
 width: 100%;
}
.desc {
  font-size: 14px;
}
}

`

export default function ExibicaoProduto({ produtoExibido }) {

  return (
    <ExibicaoProdutoEstilizado>
      
      <div className='itemImg'>
          <img className='card' src={`../${produtoExibido.imagem}`} alt={produtoExibido.nome}></img>
      </div>
      <div className='cardInfo card'>
      <span>
        <h1>{produtoExibido.nome}</h1>
        <ExibidorNotaProduto nota={produtoExibido.nota} quantidadeAvaliacoes={produtoExibido.quantidadeAvaliacoes} />
        <ExibicaoPreco preco={produtoExibido.preco} />
        <p className='desc'>{produtoExibido.descricao}</p>
      </span>
      <BotaoAdicionarAoCarrinho produto={produtoExibido} />
    </div>


    </ExibicaoProdutoEstilizado >
  )
}
