import React from 'react'
import { useParams } from 'react-router-dom'
import produtos from '../../json/produtos.json'
import ExibicaoProduto from '../../Componentes/ExibicaoProduto';

export default function PaginaProduto() {
  const parametros = useParams();
  const produto = produtos.filter((produto) => produto.id === Number(parametros.id))[0]
 
  return (
    <>
    <ExibicaoProduto produtoExibido={produto}/>
    </>
  )
}
