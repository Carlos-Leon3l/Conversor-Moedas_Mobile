import { useState } from 'react';
import { TAXAS_CAMBIO } from '../utils/constantes';
import { formatarMoeda, formatarData } from '../utils/formatadores';

export function useConversorMoedas() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('USD');
  const [moedaDestino, setMoedaDestino] = useState('BRL');
  const [resultado, setResultado] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [erro, setErro] = useState('');

  const converterValor = () => {
    setErro('');
    
    const valorTratado = valor.replace(',', '.');
    
    if (!valorTratado || isNaN(Number(valorTratado)) || Number(valorTratado) <= 0) {
      setErro('Digite um valor numérico válido maior que zero.');
      setResultado(null);
      return;
    }

    if (moedaOrigem === moedaDestino) {
      setErro('As moedas de origem e destino não podem ser iguais.');
      setResultado(null);
      return;
    }

    const valorNumerico = parseFloat(valorTratado);
    const valorEmBRL = valorNumerico * TAXAS_CAMBIO[moedaOrigem];
    const valorConvertido = valorEmBRL / TAXAS_CAMBIO[moedaDestino];
    
    setResultado(valorConvertido);

    const novaConversao = {
      id: Date.now().toString(),
      data: formatarData(new Date()),
      valorOrigem: formatarMoeda(valorNumerico, moedaOrigem),
      valorDestino: formatarMoeda(valorConvertido, moedaDestino),
      moedaOrigem,
      moedaDestino
    };

    setHistorico([novaConversao, ...historico]);
  };

  const inverterMoedas = () => {
    setMoedaOrigem(moedaDestino);
    setMoedaDestino(moedaOrigem);
    setResultado(null);
    setErro('');
  };

  const limparValores = () => {
    setValor('');
    setMoedaOrigem('USD');
    setMoedaDestino('BRL');
    setResultado(null);
    setErro('');
  };

  return {
    valor,
    setValor,
    moedaOrigem,
    setMoedaOrigem,
    moedaDestino,
    setMoedaDestino,
    resultado,
    historico,
    erro,
    converterValor,
    inverterMoedas,
    limparValores
  };
}
