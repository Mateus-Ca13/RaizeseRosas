import React, { useState } from 'react'
import styled from 'styled-components'


const BotaoEstilizado = styled.div`
display: flex;
align-items: center;
justify-content: start;

button {
  padding: 0.5em;
  font-size: 20px;
  color: var(--branco);
  border:none;
  background-color: var(--verde-principal);
  margin: 1em;
  border-radius: 10px;
  transition: 0.3s all;

  &:hover {
    transition: 0.3s all;
    opacity: 0.7;
  }
}

.resultadoFrete {
  margin: 0;
  color: var(--verde-principal);
}

@media screen and (max-width: 580px){
  flex-direction: column;

  button {
    width: 100%;
  }

  .resultadoFrete {
    margin: 0 0 2em 0;
  }
}
`
export default function BotaoCalcularFrete({ cep, taxaEntrega, setTaxaEntrega, inputsPreenchidos, setDesconto }) {
  const [freteVisivel, setFreteVisivel] = useState(false)

  function calcularFrete(cep) {
    var somaCep = 0;
    cep.length > 0 ? cep.split("").forEach((num) => {
      somaCep = somaCep + parseInt(num)
    }) : setFreteVisivel(false);
    setTaxaEntrega(0);
    setDesconto(0);

    if (cep.length == 8 && verificarInputs()) {
      setFreteVisivel(true)

      if (somaCep < 15) {
        setTaxaEntrega(10)
      } else {
        setTaxaEntrega(somaCep / 3)
      }
    }
    else {
      setFreteVisivel(false)
      setTaxaEntrega(0)
      setDesconto(0)
      alert("Preencha todos os campos corretamente!")
    }
  }

  function verificarInputs( ) {
    let todosPreenchidos = true
    for (const input in inputsPreenchidos) {
      if(!inputsPreenchidos[input]) {
        todosPreenchidos = false
      }
    }
    return todosPreenchidos
  }
  return (
    <BotaoEstilizado>
      <button onClick={(e) => {
        e.preventDefault()
        calcularFrete(cep)
      }}>
        Calcular Frete
      </button>
      {freteVisivel ? <p className='resultadoFrete'>O frete para seu endereço é de R${taxaEntrega.toFixed(2)}</p> : <p></p>}
      
    </BotaoEstilizado>
  )
}
