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
    if (!valor || isNaN(Number(valor)) || Number(valor) <= 0) {
      setErro('Digite um valor numérico válido maior que zero.');
      setResultado(null);
      return;
    }

    if (moedaOrigem === moedaDestino) {
      setErro('As moedas de origem e destino não podem ser iguais.');
      setResultado(null);
      return;
    }

    // Como as vírgulas podem atrapalhar no parseFloat se o usuário digitar no formato BR, substituímos antes
    const valorNumerico = parseFloat(valor.replace(',', '.'));
    
    // A nossa constante baseia o valor multiplicando para BRL
    const valorEmBRL = valorNumerico * TAXAS_CAMBIO[moedaOrigem];
    // Em seguida, converte do BRL para a moeda de destino dividindo
    const valorConvertido = valorEmBRL / TAXAS_CAMBIO[moedaDestino];
    
    setResultado(valorConvertido);

    // Salvar no histórico
    const novaConversao = {
      id: Date.now().toString(),
      data: formatarData(new Date()),
      valorOrigem: formatarMoeda(valorNumerico, moedaOrigem),
      valorDestino: formatarMoeda(valorConvertido, moedaDestino),
      moedaOrigem,
      moedaDestino
    };

    // Mantém as últimas conversões no topo
    setHistorico([novaConversao, ...historico]);
  };

  const inverterMoedas = () => {
    setMoedaOrigem(moedaDestino);
    setMoedaDestino(moedaOrigem);
    setResultado(null); // Obriga o usuário a clicar em converter novamente
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
