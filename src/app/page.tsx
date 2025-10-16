"use client";

import { useState } from "react";

export default function Home() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('Soma');
  const [result, setResult] = useState<number | string | null>(null); // Aceita string para mensagens de erro

  const onHandleCalculate = () => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Por favor, insira números válidos");
      return;
    }

    if (operation === 'Soma') {
      setResult(num1 + num2);
    } else if (operation === 'Subtração') {
      setResult(num1 - num2);
    } else if (operation === 'Multiplicação') {
      setResult(num1 * num2);
    } else if (operation === 'Divisão') {
      if (num2 === 0) {
        setResult("Não é possível dividir por zero");
      } else {
        setResult(num1 / num2);
      }
    }
  };

  // Função para formatar números no padrão brasileiro (1.234,56)
  const formatNumber = (value: number) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white">
      <div>
        <h1 className="text-4xl text-orange-400 font-bold text-center mb-2">CSHUB</h1>
      </div>

      <div>
        <input
          id="firstNumber"
          className="border rounded-md max-w-full p-2 mb-4"
          type="text"
          placeholder="Primeiro número"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>

      <div>
        <input
          id="secondNumber"
          className="border rounded-md max-w-full p-2 mb-5"
          type="text"
          placeholder="Segundo número"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>

      <div>
        <select
          name="operations"
          id="operations"
          className="border rounded-md max-w-full p-2 mb-2 bg-black text-white cursor-pointer hover:bg-orange-400"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="Soma">Soma</option>
          <option value="Subtração">Subtração</option>
          <option value="Multiplicação">Multiplicação</option>
          <option value="Divisão">Divisão</option>
        </select>
      </div>

      <div>
        <button
          className="bg-orange-400 rounded-md hover:bg-400 cursor-pointer p-2 mt-2 text-center font-bold"
          onClick={onHandleCalculate}
        >
          CALCULAR
        </button>
      </div>

      <div className="mt-5 bg-white text-orange-400 p-2 rounded-md font-bold max-w-full">
        <p>
          O resultado da {operation} é:{' '}
          {typeof result === 'number' ? formatNumber(result) : result}
        </p>
      </div>
    </div>
  );
}
