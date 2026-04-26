export const MOEDAS = [
  { id: 'BRL', nome: 'Real', simbolo: 'R$' },
  { id: 'USD', nome: 'Dólar', simbolo: '$' },
  { id: 'EUR', nome: 'Euro', simbolo: '€' },
  { id: 'GBP', nome: 'Libra', simbolo: '£' },
];

// Valores baseados em relação ao Real (BRL) para cálculo cruzado
// Exemplo: 1 USD = 5.0 BRL
export const TAXAS_CAMBIO = {
  BRL: 1.0,
  USD: 5.0,
  EUR: 5.4,
  GBP: 6.2,
};
