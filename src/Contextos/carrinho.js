import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export default function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )

}

export function useCarrinhoContext() {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    function adicionarProdutoNoCarrinho(novoProduto) {
        //novoProduto é um obj que possui o produto em questão e uma quantidade estabelecida.
        const produtoRepetido = carrinho.some(produto => produto.produto.id === novoProduto.produto.id);
        let carrinhoNovo = [...carrinho];

        if (!produtoRepetido) {
            carrinhoNovo.push(novoProduto);
            return setCarrinho(carrinhoNovo);

        }
        const produtoExistente = carrinho.filter(produto => produto.produto.id === novoProduto.produto.id)[0];
        produtoExistente.quantidade = produtoExistente.quantidade + 1;
        return setCarrinho(carrinhoNovo)
    }



    function atualizarQuantidadeItemDoCarrinho(ProdutoSelecionado, operacao) {

        let carrinhoModificado = carrinho.map((produto) => {
            if (produto.produto.id === ProdutoSelecionado.produto.id) {
                produto.quantidade = produto.quantidade + operacao

                if(produto.quantidade == 0) {
                    return false
                }
                return produto;
            }
            return produto
        })

        const carrinhoNovo = carrinhoModificado.filter((produto) => produto != false)

        setCarrinho(carrinhoNovo)
    }

    return {
        carrinho,
        adicionarProdutoNoCarrinho,
        atualizarQuantidadeItemDoCarrinho
    }
}
