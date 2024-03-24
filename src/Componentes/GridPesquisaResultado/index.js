import React from 'react'
import GridDeCards from '../GridDeCards'
import produtos from '../../json/produtos.json'
import styled from 'styled-components'

const GridPesquisaEstilizada = styled.div`
 padding: 2em 0;
  margin: 2em;
  background-color: var(--cinza);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
    border-radius: 15px;

    h1, p{
      margin: 0;
    }
`

export default function GridPesquisaResultado({ pesquisa }) {

  const resultadoPesquisa = produtos.filter((produto) => {
    if (produto.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
      return produto
    }
    else {
      if (produto.descricao.toLowerCase().includes(pesquisa.toLowerCase())) {
        return produto
      }
    }
  }
  )

  return (
    <>
      {resultadoPesquisa.length > 0 ? <GridDeCards lista={resultadoPesquisa} /> : <ExibicaoPesquiaVazia/>}
    </>
  )
}


function ExibicaoPesquiaVazia() {
  return (
    <GridPesquisaEstilizada>
    <h1>Sua busca não retornou nenhum produto!</h1>
    <p>Talvez não tenhamos o que procura... Mas antes experimente fazer uma pesquisa com menos termos!</p>
    </GridPesquisaEstilizada>
  )
}
