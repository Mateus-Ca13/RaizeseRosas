import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutPadrao from './Paginas/LayoutPadrao'
import PaginaHome from './Paginas/PaginaHome'
import PaginaProduto from './Paginas/PaginaProduto'
import PaginaCarrinho from './Paginas/PaginaCarrinho'
import PaginaPesquisa from './Paginas/PaginaPesquisa'
import CarrinhoProvider from './Contextos/carrinho'
import ScrollToTop from './Componentes/ScrollToTop'
import PaginaUnidades from './Paginas/PaginaUnidades'
import PaginaContato from './Paginas/PaginaContato'


export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <CarrinhoProvider>
            <Routes>
              <Route path='/' element={<LayoutPadrao />}>
                <Route index element={<PaginaHome />} />
                <Route path='/unidades' element={<PaginaUnidades/>}/>
                <Route path='/contato' element={<PaginaContato/>}/>
                <Route path='produtos/:id/*' element={<PaginaProduto />} />
                <Route path='pesquisar/:busca/*' element={<PaginaPesquisa />} />
                <Route path='/carrinho' element={<PaginaCarrinho />} />
              </Route>
            </Routes>
          
        </CarrinhoProvider>
        
      </BrowserRouter>
    </>
  )
}
