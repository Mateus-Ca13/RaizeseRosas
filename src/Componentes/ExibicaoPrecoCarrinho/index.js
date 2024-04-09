
import styled from 'styled-components';
import BotaoFinalizarCompra from '../BotaoFinalizarCompra';

const ExibidorPrecoCarrinhoEstilizado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  color: var(--verde-secundario);
  padding: 0.5em 1em;
  border-radius: 10px;
  background-color: var(--verde-principal);

  h3 {
    color: var(--branco);
    
  }

  h3, h4 {
    margin: 0.2em;
    font-size: 22px;
  }

  .preco {
    display: flex;
    align-items: center;

    h2 {

      margin: 0.2em;
      font-size: 16px;
    }
  }

  @media screen  and (max-width: 680px){
    flex-direction: column;
    align-items: start;
  }

`

export default function ExibicaoPrecoCarrinho({ finalizarPedido, setFinalizarPedido, precoTotal }) {

  return (
    <ExibidorPrecoCarrinhoEstilizado>
      <div>
        <h4>Valor total de carrinho:</h4>
        <div className='preco'>
          <h3>R${precoTotal.toFixed(2)}</h3>
          <h2>ou 10x de R${(precoTotal / 10).toFixed(2)} sem juros.</h2>
        </div>
      </div>
      <BotaoFinalizarCompra finalizarPedido={finalizarPedido} setFinalizarPedido={setFinalizarPedido} />

    </ExibidorPrecoCarrinhoEstilizado>
  )
}
