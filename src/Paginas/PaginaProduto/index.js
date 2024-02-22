import React from 'react'
import { useParams } from 'react-router-dom'
import produtos from '../../json/produtos.json'
import ExibicaoProduto from '../../Componentes/ExibicaoProduto';
import Titulo from '../../Componentes/Titulo';
import ComentariosAba from '../../Componentes/ComentariosAba';
import styled from 'styled-components';
import GridDeCards from '../../Componentes/GridDeCards';

const PaginaProdutoEstilizado = styled.main`
margin: 2.5em;

@media screen and (max-width: 580px){
  margin: 2.5em 1em;
}
`

export default function PaginaProduto() {
  const parametros = useParams();
  const produto = produtos.filter((produto) => produto.id === Number(parametros.id))[0]
 
  return (
    <PaginaProdutoEstilizado>
    <ExibicaoProduto produtoExibido={produto}/>
    <Titulo>Comentários</Titulo>
    <ComentariosAba comentarios={produto.comentarios}/>
    <Titulo>Itens semelhantes a esse</Titulo>
    <GridDeCards lista={produtos} qtdDeCards={5} ItemParafiltro={produto}/>
    </PaginaProdutoEstilizado>
  )
}
