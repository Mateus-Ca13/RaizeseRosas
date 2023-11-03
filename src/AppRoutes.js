import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutPadrao from './Paginas/LayoutPadrao'
import PaginaHome from './Paginas/PaginaHome'
import PaginaProduto from './Paginas/PaginaProduto'
import PaginaCarrinho from './Paginas/PaginaCarrinho'
import PaginaPesquisa from './Paginas/PaginaPesquisa'
import CarrinhoProvider from './Contextos/carrinho'

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <CarrinhoProvider>
          <Routes>
            <Route path='/' element={<LayoutPadrao />}>
              <Route index element={<PaginaHome />} />
              <Route path='produtos/:id/*' element={<PaginaProduto />} />
              <Route path='pesquisar/:busca/*' element={<PaginaPesquisa />} />
            </Route>
            <Route path='/carrinho' element={<PaginaCarrinho />} />
          </Routes>
        </CarrinhoProvider>
      </BrowserRouter>
    </>
  )
}
