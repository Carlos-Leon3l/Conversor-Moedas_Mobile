export const formatarMoeda = (valor, moeda) => {
  if (isNaN(valor)) return '';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: moeda,
  }).format(valor);
};

export const formatarData = (data) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(data);
};
